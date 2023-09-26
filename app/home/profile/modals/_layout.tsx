import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const rootLayout = () => {
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="PaymentModal" options={{
            presentation: 'modal'
        }} />
    </Stack>
  )
}

export default rootLayout