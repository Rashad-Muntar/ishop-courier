import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './MainStack'

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  )
}
export default RootNavigator
