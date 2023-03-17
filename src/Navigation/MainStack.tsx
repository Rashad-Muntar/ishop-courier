import { createStackNavigator } from '@react-navigation/stack'
import GetStarted from '../screens/getStarted/Index'
import Login from '../screens/auth/Login'
const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        options={{ headerShown: false}}
        name="Start"
        component={Login}
      />
    </Stack.Navigator>
  )
}

export default MainNavigation
