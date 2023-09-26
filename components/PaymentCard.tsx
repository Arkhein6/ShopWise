import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useState } from "react";
import MasterCardImage from "../assets/images/Card.png";
import { Ionicons } from "@expo/vector-icons";
import { paymentCard as styles } from "./styles";

type paymentProps = {
	id: number;
	holderName: string;
	expiryDate: string;
};

const PaymentCard = (details: paymentProps) => {
	const [checked, setChecked] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			<View style={styles.imagerange}>
				<ImageBackground
					style={styles.image}
					imageStyle={{
						resizeMode: "contain",
					}}
					source={MasterCardImage}
				/>
				<View style={styles.idrange}>
					<Text style={styles.id}>****</Text>
					<Text style={styles.id}>****</Text>
					<Text style={styles.id}>****</Text>
					<Text style={styles.id}>{details.id}</Text>
				</View>
				<View style={styles.userrange}>
					<View style={styles.user}>
						<Text style={styles.usertext}>Card Holder Name</Text>
						<Text style={styles.usertext}>{details.holderName}</Text>
					</View>
					<View style={styles.user}>
						<Text style={styles.usertext}>Expiry Date</Text>
						<Text style={styles.usertext}>{details.expiryDate}</Text>
					</View>
				</View>
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
	);
};

export default PaymentCard;
