import { View, Text ,ScrollView,Pressable, ImageSourcePropType} from 'react-native'
import React from 'react'
import roughImage from "../../../assets/images/pexels8.jpg"
import ProductCardBag from '../../../components/ProductCardBag'
import { TextInput } from 'react-native-gesture-handler'

type bagOrderProps = {
    itemName: string,
    color: string,
    size: string,
    price: number,
    imageUrl: ImageSourcePropType
}

const index = () => {
    const bagOrder: bagOrderProps[] = [{
        itemName: 'pullover',
        color:'Black',
        size:'L',
        price: 51,
        imageUrl:roughImage
    },{
        itemName: 'T-Shirt',
        color:'Gray',
        size:'L',
        price: 30,
        imageUrl:roughImage
        
    },{
        itemName: 'Sport Dress',
        color:'Black',
        size:'M',
        price: 43,
        imageUrl:roughImage

    }]
  return (
    <View>
        <Text>My Bag</Text>
        <ScrollView>
            {
                bagOrder.map((curr,idx) => (
                    <Pressable>
                        <ProductCardBag imageUrl={curr.imageUrl} title={curr.itemName} color={curr.color} size={curr.size} actualPrice={curr.price}/>
                    </Pressable>
                ))
            }
        </ScrollView>
        <View>
            <TextInput></TextInput>
            <Text>Icon Here</Text>
        </View>
        <View>
            <View>
                <Text>Total Amount:</Text>
                <Text>TotalAmountcalc$</Text>
            </View>
            <Pressable>
                <Text>Checkout</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default index