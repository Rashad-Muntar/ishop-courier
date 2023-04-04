// import CartList from '../shared/cart/cartItemList'
import CustomDrawer from '../components/menu/CustomDrawer'
import GoOnline from '../screens/goOnline'
// import Categories from '../screens/Dashbaord/Category/Categories'
// import ProductList from '../screens/Dashbaord/Product/ProductList'
import MainNavigation from './MainStack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()
const Cart = createDrawerNavigator()

export const MenuDrawer = () => (
  <Drawer.Navigator
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
    <Drawer.Screen
      name="Go-online"
      component={GoOnline}
      options={{ headerShown: false }}
    />
  </Drawer.Navigator>
)
