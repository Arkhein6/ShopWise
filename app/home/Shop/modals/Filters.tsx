import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Filters = () => {
  return (
   <ScrollView showsVerticalScrollIndicator={false}>
    <View>
        <Text>Price range</Text>
        <View>price Slider</View>
    </View>
    <View>
        <Text>Colors</Text>
        <View>Color selector</View>
    </View>
    <View>
        <Text>Sizes</Text>
        <View>Sizes selector</View>
    </View>
    <View>
        <Text>Category</Text>
        <View>Main categories</View>
    </View>
    <View>
        <Text>Brand</Text>
        <View>Major Brands</View>
    </View>

   </ScrollView>
  )
}

export default Filters