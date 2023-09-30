import { View, Text, Modal, Pressable } from "react-native";
import React from "react";

const SortModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
	return (
		<Modal
			visible={visible}
			onRequestClose={onClose}
			animationType="slide"
			transparent={true}
		>
			<Pressable
				onPress={onClose}
				style={{
					flex: 1,
				}}
			></Pressable>
			<View>
				<Pressable>
					<Text>Popular</Text>
				</Pressable>
				<Pressable>
					<Text>Newest</Text>
				</Pressable>
				<Pressable>
					<Text>Customer Review</Text>
				</Pressable>
				<Pressable>
					<Text>Price: lowest to high</Text>
				</Pressable>
				<Pressable>
					<Text>Price: highest to low</Text>
				</Pressable>
			</View>
		</Modal>
	);
};

export default SortModal;
