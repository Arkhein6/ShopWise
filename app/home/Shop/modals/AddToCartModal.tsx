import { View, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { sortModal as styles } from "./styles";


const AddToCartModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
	const sizes: string[] = ["XS","S","M","L","XL","XXL"]

	return (
		<Modal
			visible={visible}
			onRequestClose={onClose}
			animationType="slide"
			transparent={true}
		>
			<Pressable
				onPress={onClose}
				style={styles.modaloverlay}
			></Pressable>
			<View style={styles.container}>
				<Text style={styles.title}>Sort by</Text>
				{sizes.map((current,idx) => (
					<Pressable key={idx}
					>
						<Text>{current}</Text>
					</Pressable>
				))}
                <Pressable>
                    <Text>Add to Favorites</Text>
                </Pressable>
			</View>
		</Modal>
	);
};

export default AddToCartModal;
