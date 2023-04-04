import React, { useEffect, useState } from 'react'
import { Colors } from '../../components/shared/Constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { API, graphqlOperation } from 'aws-amplify'
import { shopperLogin } from '../../graphql/mutations'
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
  ActivityIndicator,
} from 'react-native'
import CheckInternet from '../../utility/CheckInternet'
import Button from '../../components/shared/Button'
import Input from '../../components/shared/InputText'
import { loginAction } from '../../StateManagement/Store/Actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import InputPassword from '../../components/shared/InputPassword'
import { useFormik } from 'formik'

const Login = () => {
  // const [login, { data, loading }] = useShopperLoginMutation()
  const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(false)
  const isUser = useSelector((state) => state.auth)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const handleNewAccount = async () => {
    const url = 'https://ishop.formaloo.net/flo2j'
    const supported = await Linking.canOpenURL(url)
    if (supported) {
      await Linking.openURL(url)
    } else {
      console.log(`Don't know how to open URL: ${url}`)
    }
  }

  useEffect(() => {
    const userId = userData?.shopper?.id
    const authToken = userData?.token
    dispatch(loginAction({ userId, authToken }))
    if (isUser.authToken !== null && isUser.userId !== null) {
      navigation.navigate('Go-online')
    }
  }, [userData])

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const newUser = await API.graphql(
          graphqlOperation(shopperLogin, {
            email: values.email,
            password: values.password
          })
        )
        setUserData(newUser.data.shopperLogin)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    },
  })

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
                  // type="email-address"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChangeText={formik.handleChange('email')}
                  icon={
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={24}
                      color={Colors.light.textPrimaryBlack}
                    />
                  }
                />
                <InputPassword
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                />
                <Button
                  disable={loading}
                  bg={
                    loading
                      ? Colors.light.textPrimaryBlack100
                      : Colors.light.primary
                  }
                  width="50%"
                  placeholder={
                    loading ? (
                      <ActivityIndicator color={Colors.light.whiteText} />
                    ) : (
                      'Login'
                    )
                  }
                  textColor={Colors.light.whiteText}
                  fontSize={16}
                  onPress={formik.handleSubmit}
                  height={50}
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
    fontWeight: '500',
    fontSize: 17,
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
