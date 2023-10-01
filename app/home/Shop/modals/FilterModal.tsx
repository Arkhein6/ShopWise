import { View, Text, ScrollView, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { filters as styles } from "./styles";
import { Slider } from "@miblanchard/react-native-slider";
import { AntDesign } from "@expo/vector-icons";

const colors: string[] = [
	"black",
	"brown",
	"green",
	"blue",
	"pink",
	"red",
	"brown",
	"green",
	"blue",
];
const sizes: string[] = ["XS", "S", "M", "L", "XL"];
const mainCategories: string[] = ["All", "Women", "Men", "Boys", "Women"];
const brand: string[] = [
	"Adidas",
	"Louis Vuitton",
	"Blend",
	"Champion",
	"Diesel",
	"Jack and Jones",
	"Naf Naf",
	"Oliver",
	"Valentino",
];

const FilterModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
	const [value, setValue] = useState([5, 15]);
	return (
		<Modal
			visible={visible}
			onRequestClose={onClose}
			transparent={false}
			animationType="slide"
		>
			<View style={styles.header}>
				<Pressable style={styles.headericon} onPress={onClose}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</Pressable>
				<Text style={styles.headertext}>Filters</Text>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ gap: 10, marginTop: 10 }}
			>
				<View style={styles.filtersrange}>
					<Text style={styles.title}>Price Range</Text>
					<View style={styles.filterscontainers}>
						<View style={{
							justifyContent:'space-between',
							flexDirection:'row'
						}}>
							<Text>${value[0]}</Text>
							<Text>${value[1]}</Text>
						</View>
						<Slider
							animateTransitions
							maximumTrackTintColor="#d3d3d3"
							maximumValue={30}
							minimumTrackTintColor="red"
							minimumValue={5}
							thumbTintColor="red"
							value={value}
							onValueChange={setValue}
							step={5}
						/>
					</View>
				</View>
				<View style={styles.filtersrange}>
					<Text style={styles.title}>Colors</Text>
					<View style={styles.filterscontainers}>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.colorrange}
						>
							{colors.map((current,idx) => (
								<Pressable key={idx} style={styles.colorborder}>
									<View
										style={[
											{
												backgroundColor: current,
												borderColor: current,
											},
											styles.color,
										]}
									></View>
								</Pressable>
							))}
						</ScrollView>
					</View>
				</View>
				<View style={styles.filtersrange}>
					<Text style={styles.title}>Sizes</Text>
					<View style={[styles.filterscontainers, styles.sizerange]}>
						{sizes.map((current,idx) => (
							<Pressable key={idx} style={styles.size}>
								<Text>{current}</Text>
							</Pressable>
						))}
					</View>
				</View>
				<View style={styles.filtersrange}>
					<Text style={styles.title}>Category</Text>
					<View
						style={[styles.filterscontainers, styles.categoryrange]}
					>
						{mainCategories.map((current,idx) => (
							<Pressable key={idx} style={styles.category}>
								<Text>{current}</Text>
							</Pressable>
						))}
					</View>
				</View>
				<View style={styles.filtersrange}>
					<Text style={styles.title}>Brand</Text>
					<View style={[styles.filterscontainers, styles.brandrange]}>
						{brand.map((current,idx) => (
							<Pressable key={idx} style={styles.brand}>
								<Text>{current}</Text>
								<View style={styles.brandcheckbox}></View>
							</Pressable>
						))}
					</View>
				</View>
			</ScrollView>
			<View style={styles.confirmrange}>
				<Pressable style={[styles.confirm, styles.discardconfirm]}>
					<Text>Discard</Text>
				</Pressable>
				<Pressable style={[styles.confirm, styles.applyconfirm]}>
					<Text
						style={{
							color: "white",
						}}
					>
						Apply
					</Text>
				</Pressable>
			</View>
		</Modal>
	);
};

export default FilterModal;
