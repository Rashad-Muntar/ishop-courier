import { StatusBar } from 'expo-status-bar'
import store from './src/StateManagement/Store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/Navigation/MainStack'
import { StyleSheet, View } from 'react-native'
import { ApolloProvider } from '@apollo/client'
import { Amplify } from 'aws-amplify'
import awsmobile from "./src/aws-exports"
import useClient from './src/lib/client'
Amplify.configure(awsmobile)
export default function App() {
  const client = useClient()
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </ApolloProvider>
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
