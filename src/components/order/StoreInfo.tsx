import { isAWSIPAddress } from '@aws-amplify/datastore/lib-esm/util'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../shared/Constants'
interface Props {
  storeName?: string
  storeAddress?: string
}
const StoreInfo = ({ storeName, storeAddress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderLocation}>
        <View>
          <Text style={styles.locationHead}>Pick up location</Text>
          <Text style={styles.storeName}>{storeName}</Text>
          <Text style={styles.address}>{storeAddress}</Text>
          <Text style={styles.address}>Ashanti Region</Text>
        </View>
        <View>
          <Text style={styles.locationHead}>Delivery location</Text>
          <Text style={styles.address}>Plot 12 Block H Kumasi</Text>
          <Text style={styles.address}>Ashanti Region</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.light.primary50,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  locationHead: {
    color: Colors.light.primary50,
    fontSize: 15,
    fontWeight: '600',
    paddingVertical: 10,
  },
  orderLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storeName: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.light.primary50,
    paddingBottom: 2,
  },
  address: {
    color: Colors.light.primary50,
  },
})

export default StoreInfo
