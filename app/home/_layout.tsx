import { Tabs } from 'expo-router'
import React from 'react'
import { MaterialIcons,Entypo,Fontisto } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen name='Home' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <Entypo name="home" size={size} color={color} />
            },
            tabBarActiveTintColor:'red'
        }}
        />
        <Tabs.Screen name='Shop' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <MaterialIcons name="shopping-cart" size={size} color={color} />
            },
            tabBarActiveTintColor:'red'

        }}/>
        <Tabs.Screen name='Bag' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <Fontisto name="shopping-bag" size={size} color={color} />
            },
            tabBarActiveTintColor:'red'

        }}/>
        <Tabs.Screen name='Favorites' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <MaterialIcons name="favorite" size={size} color={color} />            
            },
            tabBarActiveTintColor:'red'

        }} />
        <Tabs.Screen name='Profile' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <Entypo name="user" size={size} color={color} />
            },
            tabBarActiveTintColor:'red'

        }}/>
    </Tabs>
  )
}

export default TabLayout