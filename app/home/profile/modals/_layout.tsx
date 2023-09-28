import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const rootLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="addShippingAddress" options={{
        headerShown:true,
        headerTitle:"Adding Shipping Address",
        
      }} />
    </Stack>
  )
}

export default rootLayout