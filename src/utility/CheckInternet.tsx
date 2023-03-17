import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import Toast from 'react-native-toast-message'

const CheckInternet = () => {
  const [isOffline, setOfflineStatus] = useState(false)
  console.log(isOffline)

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    })
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable)
      setOfflineStatus(offline)
    })
    return () => removeNetInfoSubscription()
  })
  useEffect(() => {
    isOffline &&
      Toast.show({
        type: 'success',
        text1: 'Ooops you dont have inter connection',
      })
  })
  return (
    <View>
      <Toast />
    </View>
  )
}

export default CheckInternet
