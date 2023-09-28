import { Tabs } from 'expo-router'
import React from 'react'
import { MaterialIcons,Entypo,Fontisto } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'red'

    }}>
        <Tabs.Screen name='Home' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <Entypo name="home" size={size} color={color} />
            },
        }}
        />
        <Tabs.Screen name='Shop' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <MaterialIcons name="shopping-cart" size={size} color={color} />
            },
            headerShown:true,
            headerTitle:'',
            headerRight: () => (
                <MaterialIcons name="search" size={24} color="black" />
            )

        }}/>
        <Tabs.Screen name='Bag' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <Fontisto name="shopping-bag" size={size} color={color} />
            },

            

        }}/>
        <Tabs.Screen name='Favorites' options={{
            tabBarIcon: ({focused,color,size}) => {
                return <MaterialIcons name="favorite" size={size} color={color} />            
            },

        }} />
        <Tabs.Screen name='profile'  options={{
            tabBarIcon: ({focused,color,size}) => {
                return <Entypo name="user" size={size} color={color} />
            },
            headerShown:true,
            headerTitle:'',
            headerStyle:{
                backgroundColor:'#F5F5F5'
              },
        headerShadowVisible:false,

        }}/>
        
    </Tabs>
  )
}

export default TabLayout