import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const rootLayout = () => {
  return (
    <Stack screenOptions={{
    }}>
      <Stack.Screen name="index" options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Categories" options={{
      }}/>
      <Stack.Screen name="modals" options={{
        headerShown:false
      }}/>
    </Stack>
  )
}

export default rootLayout