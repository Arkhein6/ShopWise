import { View, Text,ImageSourcePropType,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'


type productProps = {
  imageUrl: ImageSourcePropType,
  discountRate?: number,
  isNew?: boolean,
  ratings: number,
  subTitle: string,
  title: string,
  actualPrice: number
}
const ProductCardList = (props: productProps) => {
  return (
    <View>
      <View>
      <View>
      <Image source={props.imageUrl} />
          {
            props?.isNew && <Text>NEW</Text>
          }
          {
            props?.discountRate && <Text>{props.discountRate}</Text>
          }
        </View>
      </View>
      <View>
        <Text>{props.title}</Text>
        <Text>{props.subTitle}</Text>
        <View>{
          props.ratings ===0 ?
          new Array(Math.ceil(props.ratings) + 1).map((curr,idx) => {
            return (
              <AntDesign name="star" size={24} color="yellow" />
            )
          }):
          new Array(Math.ceil(props.ratings) + 1).map((curr,idx) => {
            return (
              <AntDesign name="staro" size={24} color="yellow" />
            )
          })   
        }
        <Text>({props.ratings})</Text>
        </View>
        <View>
        {
          props?.discountRate && <Text>{props.discountRate * props.actualPrice}$</Text>

        }
        <Text>{props.actualPrice}$</Text>
      </View>
      <View>
        <AntDesign name="hearto" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

export default ProductCardList