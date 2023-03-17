import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface Props {
  placeholder: string
  bg: string
  textColor: string
  fontSize: number
  width: any
}
function Button({ placeholder, bg, textColor, width, fontSize }: Props) {
  return (
    <Pressable
      style={{ ...styles.container, backgroundColor: bg, width: width }}
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
        paddingVertical: 15,
    borderRadius: 100
  },

  placeholder: {
    fontWeight: '600',
  },
})

export default Button
