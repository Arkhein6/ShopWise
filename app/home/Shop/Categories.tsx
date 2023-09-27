import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import ProductCardCategory from '../../../components/ProductCardCategory'
import roughImage from "../../../assets/image/pexels8.jpg"

const Categories = () => {
  const categories: string[] = ["New","Clothes","Shoes","Accessories","Legginggs"]
  return (
    <View>
      <View>
        <Pressable>
          <Text>Women</Text>
        </Pressable>
      </View>
        <Pressable>
          <Text>Men</Text>
        </Pressable>
        <Pressable>
          <Text>Kids</Text>
        </Pressable>
      <View>
        <Text>SUMMER SALES</Text>
        <Text>Up to 50% off</Text>
      </View>
      <ScrollView>
        {
          categories.map((current) => (
            <ProductCardCategory category={current} imageUrl={roughImage} />
          ))
        }

      </ScrollView>
    </View>
  )
}

export default Categories