import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { shippingAddressCard as styles } from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";

type shippingProps = {
	title: string;
	streetAddress: string;
	mainAddress: string;
};

const ShippingAddressCard = (details: shippingProps) => {
	const [checked, setChecked] = useState<boolean>(false);

	return (
		<View>
			<View style={styles.container}>
				<View style={styles.titlerange}>
					<Text>{details.title}</Text>
					<Text style={styles.edit}>Edit</Text>
				</View>
				<View>
					<Text>{details.streetAddress}</Text>
					<Text>{details.mainAddress}</Text>
				</View>
				<View style={styles.checkboxrange}>
					<Pressable
						style={[
							styles.checkbox,
							checked ? { backgroundColor: "black" } : null,
						]}
						onPress={(): void => setChecked((curr) => !curr)}
					>
						{checked && (
							<Ionicons
								name="checkmark-sharp"
								size={16}
								color="white"
							/>
						)}
					</Pressable>
					<Text>Use as the shipping address</Text>
				</View>
			</View>
			<Pressable style={styles.addrange}>
				<AntDesign name="plus" size={26} color="white" />
			</Pressable>
		</View>
	);
};

export default ShippingAddressCard;
