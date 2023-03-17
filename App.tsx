import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/Navigation/MainStack'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigator from './src/Navigation/RootNavigation'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
