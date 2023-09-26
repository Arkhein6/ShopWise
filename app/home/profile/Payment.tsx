import { View, Text, Pressable,Modal } from "react-native";
import React from "react";
import PaymentCard from "../../../components/PaymentCard";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

const Payment = () => {
	return (
		<View>
			<Text>Payment</Text>
			<PaymentCard
				id={3947}
				holderName="Jennyfer Doe"
				expiryDate="05/23"
			/>
			<Link href={"/home/profile/modals/PaymentModal"} asChild>
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
			</Link>
			<Modal>
				
			</Modal>
		</View>
	);
};

export default Payment;
