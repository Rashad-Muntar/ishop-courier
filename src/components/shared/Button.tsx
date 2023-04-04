import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface Props {
  placeholder: any
  bg: string
  textColor?: string
  fontSize: number
  width?: any
  height: any
  onPress?: (e: any) => void
  disable?: boolean
}
function Button({ placeholder, disable, bg, textColor, width, height, fontSize, onPress }: Props) {
  return (
    <Pressable
      disabled={disable}
      onPress={onPress}
      style={{ ...styles.container, backgroundColor: bg, width: width, height: height}}
    >
      <Text style={{ ...styles.placeholder, color: textColor, fontSize: fontSize }}>
        {placeholder}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
        // paddingVertical: 15,
    borderRadius: 100
  },

  placeholder: {
    fontWeight: '600',
  },
})

export default Button
