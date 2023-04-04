import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import { Colors } from '../shared/Constants'
import Button from '../shared/Button'
import { LinearProgress } from '@rneui/themed'
import FindDriverProgress from '../shared/FindProgress'

import { AnimatedCircularProgress } from 'react-native-circular-progress'

const IncomingOrder = () => {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.contentWrap}>
        <View style={styles.content}>
          <View style={styles.btnWrap}>
            <Button
              height={30}
              bg={Colors.light.primaryRed100}
              placeholder="Reject"
              fontSize={15}
              textColor={Colors.light.textPrimaryBlack}
            />
          </View>
          <AnimatedCircularProgress
            size={150}
            width={15}
            fill={102}
            duration={60000}
            tintColor={Colors.light.primary}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor={Colors.light.primary100}
          />
          <View style={styles.newOrderAlert}>
            <Text style={styles.newOrderHead}>You have a new order!</Text>
            <Text style={styles.newOrderSub}>
              You can accept it before the time lapses
            </Text>
          </View>
        </View>
        <View style={styles.acceptBtnWrap}>
          <Button
            height={50}
            bg={Colors.light.primary}
            placeholder="Accept order"
            fontSize={18}
            textColor="white"
          />
        </View>
      </View>
    </View>
    // </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Colors.light.textPrimaryBlack,
    top: 0,
    left: 0,
    zIndex: 10,
    padding: 10,
  },
  contentWrap: {
    height: '100%',
    width: '98%',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  btnWrap: {
    width: '35%',
      alignSelf: 'flex-end',
    marginBottom: 20
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  newOrderAlert: {
    marginTop: 10,
    alignItems: 'center',
  },
  newOrderHead: {
    color: Colors.light.whiteText,
    fontWeight: '800',
    fontSize: 22,
  },
  newOrderSub: {
    color: Colors.light.whiteText,
    fontSize: 11,
  },
  acceptBtnWrap: {},
})

export default IncomingOrder
