import { View, Text ,Image, ImageSourcePropType} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

type productProps = {
    imageUrl: ImageSourcePropType,
    discountRate?: number,
    isNew?: boolean,
    ratings: number,
    subTitle: string,
    title: string,
    actualPrice: number
}
const ProductCardGrid = (props: productProps) => {
  return (
    <View>
      <View>
        <Image source={props.imageUrl} />
        <View>
          {
            props?.isNew && <Text>NEW</Text>
          }
          {
            props?.discountRate && <Text>{props.discountRate}</Text>
          }
        </View>
        <View>
        <AntDesign name="hearto" size={24} color="black" />
        </View>
      </View>
      <View>
        {
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
      <Text>{props.subTitle}</Text>
      <Text>{props.title}</Text>
      <View>
        {
          props?.discountRate && <Text>{props.discountRate * props.actualPrice}$</Text>

        }
        <Text>{props.actualPrice}$</Text>
      </View>
    </View>
  )
}

export default ProductCardGrid