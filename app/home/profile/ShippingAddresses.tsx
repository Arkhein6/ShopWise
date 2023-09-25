import { View, Text } from 'react-native'
import React from 'react'
import ShippingAddressCard from '../../../components/ShippingAddressCard'

const ShippingAddresses = () => {
  return (
    <View>
        <ShippingAddressCard title={"Jane Doe"} 
        streetAddress='3 Newbridge COurt' mainAddress='Chino hills, CA 91709, United States'/>
    </View>
  )
}

export default ShippingAddresses