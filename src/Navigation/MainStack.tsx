import { createStackNavigator } from '@react-navigation/stack'
import GetStarted from '../screens/getStarted/Index'
import Login from '../screens/auth/Login'
import GoOnline from '../screens/goOnline'
import CustomDrawer from '../components/menu/CustomDrawer'
import { MenuDrawer } from './Drawer'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const MainNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Start"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
        drawerContentContainerStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        drawerActiveTintColor: 'blue',
        drawerInactiveTintColor: 'gray',
        drawerLabelStyle: {
          fontSize: 18,
        },
      }}
      drawerContent={(props: any) => <CustomDrawer {...props} />}
    >
      {/* <Drawer.Screen
        options={{ headerShown: false }}
        name="MenuDrawer"
        component={MenuDrawer}
      /> */}
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Start"
        component={Login}
      />

      <Drawer.Screen
        options={{ headerShown: false }}
        name="Go-online"
        component={GoOnline}
      />
    </Drawer.Navigator>
  )
}

export default MainNavigation
