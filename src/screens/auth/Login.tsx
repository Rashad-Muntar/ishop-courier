import React from 'react'
import { Colors } from '../../components/shared/Constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Linking,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native'
import CheckInternet from '../../utility/CheckInternet'
import Button from '../../components/shared/Button'
import Input from '../../components/shared/InputText'
import InputPassword from '../../components/shared/InputPassword'
const Login = () => {

    const handleNewAccount = async () => {
        const url = 'https://ishop.formaloo.net/flo2j';
        const supported = await Linking.canOpenURL(url);
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log(`Don't know how to open URL: ${url}`);
        }
      };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.whiteText }}>
      <CheckInternet />
          <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.m}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.contentWrap}>
              <Text style={styles.ishop}>iShop Courier</Text>
              <Text style={styles.login}>Login</Text>
              <View style={styles.form}>
                <Input
                  type="email-address"
                  placeholder="Enter your email"
                  icon={
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      color={Colors.light.textPrimaryBlack}
                    />
                  }
                />
                <InputPassword />
                <Button
                  bg={Colors.light.primary}
                  width="50%"
                  placeholder="Log in"
                  textColor={Colors.light.whiteText}
                  fontSize={16}
                />
              </View>
              <View style={styles.cta}>
                <Text>You dont have account yet?</Text>
                <Pressable onPress={handleNewAccount}>
                  <Text style={styles.createAccount}>Create account</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  m: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
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
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccount: {
    color: Colors.light.primary,
    fontWeight: '700',
    fontSize: 18,
    paddingVertical: 5,
  },
  field: {
    color: Colors.light.textPrimaryBlack,

    width: '90%',
    height: '100%',
    marginLeft: 15,
  },
})

export default Login
