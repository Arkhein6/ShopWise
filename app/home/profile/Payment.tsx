import { View, Text, Pressable,Modal,Button } from "react-native";
import React from "react";
import PaymentCard from "../../../components/PaymentCard";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import PaymentModal from "./modals/PaymentModal";

const Payment = () => {
	const [modalVisible, setModalVisible] = React.useState(false);

	const openModal = () => {
	  setModalVisible(true);
	};
  
	const closeModal = () => {
	  setModalVisible(false);
	};
	return (
		<View>
			<Text>Payment</Text>
			<PaymentCard
				id={3947}
				holderName="Jennyfer Doe"
				expiryDate="05/23"
			/>
				<Pressable onPress={openModal}
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
			<PaymentModal visible={modalVisible} onClose={closeModal} />
			
		</View>
	);
};

export default Payment;
