import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false

    }}>
      <Stack.Screen name='index' options={{
        headerShown:false
      }}/>
      <Stack.Screen name='Payment' options={{
        headerTitle:'Payment methods',
        headerStyle:{
          backgroundColor:'#F5F5F5'
        },
        headerBackVisible:true

      }}/>
      <Stack.Screen name='ShippingAddresses' options={{
        headerTitle:'Shipping Addresses',
        headerStyle:{
          backgroundColor:'#F5F5F5'
        },
        headerBackVisible:true
        
      }}/>
       <Stack.Screen name='Settings' options={{
        headerShown:false
      }}/>

    </Stack>
  )
}

export default _layout