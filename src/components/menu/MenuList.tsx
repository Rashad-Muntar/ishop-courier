import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../shared/Constants'
import MenuItem from './MenuItem'

const MenuList = () => {
  const navigation = useNavigation()
  return (
    <View>
      <MenuItem
        onPress={() => navigation.navigate("Bookings")}
        title="My Bookings"
        icon={<Feather name="shopping-bag" size={24} color="black" />}
      />
      <MenuItem
        onPress={() => navigation.navigate("History")}
        title="History"
        icon={<MaterialIcons name="history" size={24} color="black" />}
      />
      <MenuItem
        onPress={() => navigation.navigate("FAQ")}
        title="FAQ"
        icon={<AntDesign name="questioncircleo" size={24} color="black" />}
      />
      <View style={styles.line} />
      <MenuItem
        title="Invite and earn"
        icon={
          <Ionicons
            name="ios-gift-outline"
            size={24}
            color={Colors.light.primary}
          />
        }
      />
      <MenuItem
        title="Notifications"
        icon={<Ionicons name="notifications-outline" size={24} color="black" />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: Colors.light.lightGray,
    borderBottomWidth: 1,
    width: '100%',
  },
})
export default MenuList
