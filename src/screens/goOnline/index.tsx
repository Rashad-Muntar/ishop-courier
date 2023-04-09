import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'
import Button from '../../components/shared/Button'
import { Colors } from '../../components/shared/Constants'
import MapScreen from '../../components/shared/mapView'
import IncomingOrder from '../../components/order/Incoming'
import { DrawerActions } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { setLocation } from '../../StateManagement/Store/Actions/locationAction'
import { useDispatch } from 'react-redux'
import * as Location from 'expo-location'
import { setOrder } from '../../StateManagement/Store/Actions/orderAction'
import { onCreateOrder } from '../../graphql/subscriptions'
import { useUpdateOrderMutation } from '../../generated/graphql'
import { useSelector } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { shoppeLocationUpdate } from '../../graphql/mutations'
let subs
function GoOnline() {
  const [loading, setLoading] = useState(false)
  const [updateOrder, { data }] = useUpdateOrderMutation()
  const [onlineStatus, setonlineStatus] = useState(false)
  const [incommingOrderChange, setIncommingOrderChange] = useState()
  const dispatch = useDispatch()
  const isUser = useSelector((state) => state.auth)

  const navigation = useNavigation()
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  const onlineHandler = async () => {
    let location = await Location.getCurrentPositionAsync({})
    setLoading(!loading)
    setonlineStatus(!onlineStatus)
    try {
      const shop = await API.graphql(
        graphqlOperation(shoppeLocationUpdate, {
          id: isUser.userId,
          online: onlineStatus,
          latitude: onlineStatus ? 56.130367 : location.coords.latitude,
          longitude: onlineStatus ? -106.346771 : location?.coords?.longitude,
        })
      )
      setLoading(false)
      dispatch(
        setLocation({
          latitude: !onlineStatus ? location.coords.latitude : null,
          longitude: !onlineStatus ? location.coords.longitude : null,
        })
      )
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const activateOrder = () => {
    subs = API.graphql(
      graphqlOperation(onCreateOrder, {
        filter: {
          shopperId: {
            eq: isUser.userId,
          },
        },
      })
    ).subscribe({
      next: ({ provider, value }) =>
        setIncommingOrderChange(value?.data?.onCreateOrder),
      error: (error) => console.warn(error),
    })
  }

  const acceptOrderHandler = async () => {
    setIncommingOrderChange(undefined)
    try {
      await updateOrder({
        variables: {
          input: {
            id: incommingOrderChange?.id,
            isAccepted: true,
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
  console.log(incommingOrderChange)

  const rejectOrderHandler = async () => {
    try {
      await updateOrder({
        variables: {
          input: {
            id: incommingOrderChange?.id,
            isReject: true,
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (data !== undefined && data?.updateOrder?.isAccepted === true) {
      dispatch(setOrder({ order: data.updateOrder }))
      navigation.navigate('start-order')
    } else if (data !== undefined && data?.updateOrder?.isReject === true) {
      setIncommingOrderChange(undefined)
    }
  }, [data])

  useEffect(() => {
    if (incommingOrderChange !== undefined) {
      setTimeout(() => {
        setIncommingOrderChange(undefined)
      }, 55000)
    }
  }, [incommingOrderChange])

  useEffect(() => {
    activateOrder()
    return () => {
      subs.unsubscribe()
    }
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.openDrawer}>
          <Button
            height={50}
            placeholder={
              <Entypo name="menu" size={30} color={Colors.light.whiteText} />
            }
            fontSize={10}
            onPress={handleOpenDrawer}
            width={50}
            textColor={Colors.light.whiteText}
            bg={Colors.light.primary}
          />
          {onlineStatus && (
            <Button
              height={50}
              placeholder={
                <MaterialIcons
                  name="public-off"
                  size={30}
                  color={Colors.light.whiteText}
                />
              }
              fontSize={10}
              onPress={onlineHandler}
              width={50}
              textColor={Colors.light.whiteText}
              bg={Colors.light.primaryRed100}
            />
          )}
        </View>
        <MapScreen isOnline={onlineStatus} />
        {!onlineStatus && (
          <View style={styles.onlineWrap}>
            <Button
              disable={loading}
              height={55}
              onPress={onlineHandler}
              fontSize={18}
              placeholder={
                loading ? (
                  <ActivityIndicator color={Colors.light.whiteText} />
                ) : (
                  'Check in'
                )
              }
              bg={
                loading
                  ? Colors.light.textPrimaryBlack100
                  : Colors.light.primary
              }
              width="50%"
              textColor={Colors.light.whiteText}
            />
          </View>
        )}
        {incommingOrderChange !== undefined && (
          <IncomingOrder
            onReject={rejectOrderHandler}
            onAccept={acceptOrderHandler}
            storeName={incommingOrderChange?.store.storeName}
            storeAddress={incommingOrderChange?.store.address}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onlineWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkin: {
    backgroundColor: Colors.light.primaryRed,
  },
  openDrawer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default GoOnline
