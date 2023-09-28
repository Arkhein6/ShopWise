import { View, Text, Pressable } from "react-native";
import React from "react";
import ShippingAddressCard from "../../../components/ShippingAddressCard";
import { AntDesign } from "@expo/vector-icons";

const ShippingAddresses = () => {
	return (
		<View style={{
			flex:1,
			alignItems:'center',
			marginTop:20
		}}>
			<View style={{
				width:'90%',
				gap:20
			}}>
				<ShippingAddressCard
					title={"Jane Doe"}
					streetAddress="3 Newbridge COurt"
					mainAddress="Chino hills, CA 91709, United States"
				/>
				<Pressable
					style={{
						width: 40,
						height: 40,
						backgroundColor: "black",
						borderRadius: 20,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<AntDesign name="plus" size={26} color="white" />
				</Pressable>
			</View>
		</View>
	);
};

export default ShippingAddresses;
