import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import MapScreen from '../../components/shared/mapView'

const Startorder = () => {
  return (
    <View>
          <MapScreen isOnline={true} />
    </View>
  )
}

export default Startorder
