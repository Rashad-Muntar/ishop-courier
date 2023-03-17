import React from 'react'
import { Colors } from './Constants'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface Props {
  placeholder: string
  icon: any
  type: any
}
const Input = ({ icon, placeholder, type }: Props) => {
  return (
    <View style={styles.input}>
      {icon}
      <TextInput
        style={styles.field}
        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ishop: {
    fontSize: 25,
    fontWeight: '800',
    marginVertical: 20,
  },
  contentWrap: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
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
  login: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  cta: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccount: {
    color: Colors.light.primary,
    fontWeight: '700',
    fontSize: 15,
  },
  field: {
    color: Colors.light.textPrimaryBlack,

    width: '90%',
    height: '100%',
    marginLeft: 15,
  },
})

export default Input
