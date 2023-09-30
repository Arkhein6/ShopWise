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
        headerStyle:{
          backgroundColor:'#F5F5F5'
        },
        
        
      }} />
    </Stack>
  )
}

export default rootLayout