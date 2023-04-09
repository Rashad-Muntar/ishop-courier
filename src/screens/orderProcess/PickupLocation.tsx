import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  Alert,
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Button from '../../components/shared/Button'
import { Colors } from '../../components/shared/Constants'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'

import { useSelector } from 'react-redux'

const PickupLocation = () => {
  const order = useSelector((state) => state?.order?.order)
  const [finishShopping, setFinishShopping] = useState(false)
  const navigation = useNavigation()

  const startDeliveryHandler = () => {
    Alert.alert(
      'Confirm delivery start',
      'Click the confirm below to start the delivery',
      [
        {
          text: 'Cofirm',
          onPress: () => navigation.navigate('start-delivery'),
        },
      ],
      { cancelable: false }
    )
  }

  const startVideoCallHandler = () => {
    navigation.navigate("videoCall")
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="light" backgroundColor={Colors.light.primary} />
      <View style={styles.container}>
        <View>
          <Text>Pick order</Text>
        </View>
        <View style={styles.detailWrap}>
          <View style={styles.timerWrap}>
            <MaterialCommunityIcons
              name="clock-time-three-outline"
              size={24}
              color={Colors.light.primaryRed100}
            />
            <Text style={styles.time}>Pick order in 15 minutes</Text>
          </View>
          <View style={styles.orderDetail}>
            <View style={styles.idNumWrap}>
              <Text style={styles.orderId}>ORDER ID</Text>
              <Text style={styles.orderNum}>{order.code}</Text>
            </View>
          </View>
          <View style={styles.orderDetails}>
            <View style={styles.nameAddressWrap}>
              <View style={styles.storeNameWrap}>
                <Image
                  source={{ uri: order.store.logo }}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <Text style={styles.storeName}>{order.store.storeName}</Text>
              </View>
            </View>
            <View style={styles.itemsList}>
              <View>
                <Text> 2 x Riped Banana</Text>
              </View>
            </View>
          </View>
        </View>
        <Button
          width="30%"
          height={70}
          bg={Colors.light.primary}
          textColor={Colors.light.primary}
          fontSize={12}
          placeholder={
            <Octicons name="device-camera-video" size={24} color="black" />
          }
          onPress={startVideoCallHandler}
        />
        <View style={styles.btnWrap}>
          <Text style={styles.info}>
            Click the button below to start the delivery
          </Text>
          <Button
            height={50}
            fontSize={18}
            textColor={Colors.light.whiteText}
            width="100%"
            bg={Colors.light.primary}
            placeholder="Start Delivery"
            onPress={startDeliveryHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 10,
    height: '100%',
    alignItems: 'center',
  },
  timerWrap: {
    backgroundColor: Colors.light.primaryBlue100,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0.6, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
  time: {
    fontSize: 17,
    marginLeft: 10,
    color: Colors.light.primaryBlue,
    fontWeight: "600"
  },
  orderDetail: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  idNumWrap: {
    borderBottomColor: Colors.light.lightGray,
    borderBottomWidth: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 20,
    color: Colors.light.textPrimaryBlack100,
  },
  orderNum: {
    fontSize: 55,
    fontWeight: '800',
    color: Colors.light.textPrimaryBlack,
  },
  orderDetails: {
    // height: '80%',÷
    borderWidth: 1,
    borderColor: Colors.light.lightGray,
    borderRadius: 20,
    width: '100%',
    // padding: 10,
    marginBottom: 65,
  },
  nameAddressWrap: {
    padding: 10,
  },
  storeNameWrap: {
    flexDirection: 'row',
    marginBottom: 10,
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
  detailWrap: {
    width: '100%',
  },
  itemsList: {
    borderWidth: 1,
    borderColor: Colors.light.lightGray,
    width: '100%',
    marginTop: 20,
    // borderRadius: 20,
    padding: 10,
  },
  info: {
    fontSize: 11,
    color: Colors.light.primaryRed,
    alignSelf: 'flex-start',
  },
  btnWrap: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
  },
})

export default PickupLocation
