import { View, Text } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <View>
        <Text>Personal information</Text>
      </View>
      <View>
        <View>
          <Text>Password</Text>
          <Text>change</Text>
        </View>

      </View>
      <View>
        <Text>Notifications</Text>
        <View>
          <Text>Sales</Text>
        </View>
        <View>
          <Text>New Arrivals</Text>
        </View>
        <View>
          <Text>Delivery status changes</Text>
        </View>
      </View>
    </View>
  )
}

export default Settings