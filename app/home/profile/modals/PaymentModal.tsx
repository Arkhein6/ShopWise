import {
	View,
	Text,
	Modal,
	TouchableWithoutFeedback,
	Pressable,
} from "react-native";
import React, { ReactNode } from "react";

const PaymentModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<Pressable onPress={onClose} style={{ flex: 1 }}></Pressable>
			<View
				style={{
					backgroundColor: "red",
					width: "100%",
					position: "absolute",
					bottom: 0,
				}}
			>
				<Text>Add New Card</Text>
			</View>
		</Modal>
	);
};

export default PaymentModal;
