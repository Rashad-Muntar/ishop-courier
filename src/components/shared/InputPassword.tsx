import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Colors } from './Constants'
const InputPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <View style={styles.container}>
      <Feather name="lock" size={24} color="black" />
      <TextInput
        style={styles.input}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <TouchableOpacity
        onPress={toggleShowPassword}
        style={styles.toggleButton}
      >
        <Ionicons
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={24}
          color={Colors.light.textPrimaryBlack}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    backgroundColor: Colors.light.lightGray,
    height: 50,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  toggleButton: {
    padding: 10,
  },
})

export default InputPassword
