import React, { useState } from 'react'
import { View, Text, Image, Alert, StyleSheet } from 'react-native'
import MapScreen from '../../components/shared/mapView'
import Button from '../../components/shared/Button'
import { Colors } from '../../components/shared/Constants'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

const StartDelivery = () => {
  const [orderStart, setOrderStart] = useState(false)
  const order = useSelector((state) => state?.order?.order)
  console.log(order)
  const startorderHandler = () => {
    Alert.alert(
      'Confirm arrival of delivery',
      'Click the confirm below for arrival of the delivery',
      [{ text: 'Cofirm', onPress: () => setOrderStart(true) }],
      { cancelable: false }
    )
  }

  return (
    <View style={styles.container}>
      <MapScreen isOnline={true} toPickupStart={true} mapHeight="67%" />
      <View style={styles.detailContainer}>
        <View style={styles.btnWrap}>
          <Text style={styles.info}>
            Click the button below at the delivery location
          </Text>
          <Button
            height={50}
            fontSize={18}
            textColor={Colors.light.whiteText}
            width="100%"
            bg={Colors.light.primary}
            placeholder="I am at the delivery location"
            onPress={startorderHandler}
          />
        </View>
        <View style={styles.orderDetail}>
          <View style={styles.nameAddressWrap}>
            <View style={styles.storeNameWrap}>
              <Image
                source={{ uri: order.store.logo }}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
              <Text style={styles.name}>
                {order.client.firstName} {order.client.lastName}
              </Text>
            </View>
            <Text style={styles.storeAddress}>{order.client.location}</Text>
          </View>
        </View>
        <View style={styles.orderIdStoreNameWrdap}>
          <View style={styles.orderId}>
            <Ionicons
              name="receipt-outline"
              size={24}
              color={Colors.light.textPrimaryBlack}
            />
            <Text style={styles.storeName}>Order ID: {order.code}</Text>
          </View>
          <View style={styles.orderId}>
            <MaterialIcons
              name="storefront"
              size={24}
              color={Colors.light.textPrimaryBlack}
            />
            <Text style={styles.storeName}>
              Pickup store: {order.store.storeName}
            </Text>
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
    height: '40%',
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
  },
  name: {
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
  nameAddressWrap: {
    padding: 10,
  },
  info: {
    fontSize: 11,
    color: Colors.light.primaryRed,
    alignSelf: 'flex-start',
  },
  orderId: {
    flexDirection: 'row',
  },
  storeName: {
    color: Colors.light.textPrimaryBlack,
    marginLeft: 15,
    },
    orderIdStoreNameWrdap: {
        alignSelf:"flex-start"
    }
})

export default StartDelivery
