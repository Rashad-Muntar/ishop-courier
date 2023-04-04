import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../shared/Constants'

interface Props {
  distance?: string
  deliveryFee?: String
  shoppingFee?: string
}
const DeliveryInfo = ({ distance, deliveryFee, shoppingFee }: Props) => {
  return (
    <View style={styles.tripInfo}>
      <View style={styles.tripItemWrap}>
        <Text style={styles.tripItem}>Distance</Text>
        <Text style={styles.tripItemValues}>{2.5}km</Text>
      </View>
      <View style={styles.tripItemWrap}>
        <Text style={styles.tripItem}>Delivery fee</Text>
        <Text style={styles.tripItemValues}>${15.15}</Text>
      </View>
      <View style={styles.tripItemWrap}>
        <Text style={styles.tripItem}>Shopping fee</Text>
        <Text style={styles.tripItemValues}>${20.15}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tripInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // height: 70,
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    borderColor: Colors.light.primary50,
    marginTop: 20,
  },
  tripItem: {
    fontSize: 15,
    // fontWeight: '600',
    color: Colors.light.primary50,
  },

  tripItemWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tripItemValues: {
    color: Colors.light.primary50,
    fontWeight: '700',
  },
})

export default DeliveryInfo
