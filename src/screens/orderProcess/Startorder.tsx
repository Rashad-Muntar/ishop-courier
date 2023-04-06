import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native'
import MapScreen from '../../components/shared/mapView'
import { Colors } from '../../components/shared/Constants'
import Button from '../../components/shared/Button'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Startorder = () => {
  const order = useSelector((state) => state?.order?.order)
  const navigation = useNavigation()
  const [orderStart, setOrderStart] = useState(false)

  const startorderHandler = () => {
    Alert.alert(
      'Confirm order start',
      'Click the confirm below to start the order',
      [{ text: 'Cofirm', onPress: () => setOrderStart(true) }],
      { cancelable: false }
    )
  }

  const pickUpLocationHandler = () => {
    navigation.navigate('store-location')
  }

  return (
    <View style={styles.container}>
      <MapScreen isOnline={true} toPickupStart={true} mapHeight="67%" />
      <View style={styles.detailContainer}>
        <View style={styles.btnWrap}>
          {!orderStart ? (
            <>
              <Text style={styles.info}>
                Click the button to start the order
              </Text>
              <Button
                height={50}
                fontSize={18}
                textColor={Colors.light.whiteText}
                width="100%"
                bg={Colors.light.primary}
                placeholder="Start Order"
                onPress={startorderHandler}
              />
            </>
          ) : (
            <>
              <Text style={styles.info}>
                Click this button if you reach the store
              </Text>
              <Button
                height={50}
                fontSize={18}
                textColor={Colors.light.whiteText}
                width="100%"
                bg={Colors.light.primary}
                placeholder="I am in the store"
                onPress={pickUpLocationHandler}
              />
            </>
          )}
        </View>
        <View style={styles.orderDetail}>
          <View style={styles.nameAddressWrap}>
            <View style={styles.storeNameWrap}>
              <Image
                source={{ uri: order.store.logo }}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <Text style={styles.storeName}>{order.store.storeName}</Text>
            </View>
            <Text style={styles.storeAddress}>{order.store.address}</Text>
          </View>
          <View style={styles.itemsList}>
            <View>
              <Text> 2 x Riped Banana</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainer: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    zIndex: 5,
    borderRadius: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
    backgroundColor: Colors.light.whiteText,
    padding: 20,
  },
  btnWrap: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
  },
  orderDetail: {
    // height: '80%',÷
    borderWidth: 1,
    borderColor: Colors.light.lightGray,
    borderRadius: 20,
    width: '100%',
    // padding: 10,
    marginBottom: 65,
  },
  storeName: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
    color: Colors.light.textPrimaryBlack,
    marginLeft: 15,
  },
  storeAddress: {
    fontWeight: '500',
    fontSize: 12,
    color: Colors.light.textPrimaryBlack,
  },
  storeNameWrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemsList: {
    borderWidth: 1,
    borderColor: Colors.light.lightGray,
    width: '100%',
    marginTop: 20,
    // borderRadius: 20,
    padding: 10,
  },
  nameAddressWrap: {
    padding: 10,
  },
  info: {
    fontSize: 11,
    color: Colors.light.primaryRed,
    alignSelf: 'flex-start',
  },
})
export default Startorder
