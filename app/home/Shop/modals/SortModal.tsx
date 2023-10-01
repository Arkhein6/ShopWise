import { View, Text, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { sortModal as styles } from "./styles";

type sortAbbreviations = "P" | "N" | "C" | "Pl" | "Ph";

const SortModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
	const sortArray: { sort: string; abbre: sortAbbreviations }[] = [
		{ sort: "Popular", abbre: "P" },
		{ sort: "Newest", abbre: "N" },
		{ sort: "Customer Review", abbre: "C" },
		{ sort: "Price: lowest to high", abbre: "Pl" },
		{ sort: "Price: highest to low", abbre: "Ph" },
	];

	const [currentSort, setCurrentSort] = useState<sortAbbreviations>("P");
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
				{sortArray.map((current,idx) => (
					<Pressable key={idx}
						onPressIn={() => setCurrentSort(current.abbre)}
						style={[
							styles.button,
							current.abbre === currentSort &&
								styles.buttonPressed,
						]}
					>
						<Text style={current.abbre === currentSort && styles.buttontextpressed}>{current.sort}</Text>
					</Pressable>
				))}
				
			</View>
		</Modal>
	);
};

export default SortModal;
