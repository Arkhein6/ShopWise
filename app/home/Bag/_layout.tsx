import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const rootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerTitle:'',
        headerShadowVisible:false,
        headerStyle:{
          backgroundColor:'#F5F5F5'
        }
        
      }}/>
    </Stack>
  )
}

export default rootLayout