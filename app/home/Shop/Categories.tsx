import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import ProductCardCategory from "../../../components/ProductCardCategory";
import roughImage from "../../../assets/images/pexels8.jpg";
import { categories as styles } from "./styles";

const Categories = () => {
	const categories: string[] = [
		"New",
		"Legginggs",
		"Legginggs",
		"Legginggs",
		"Legginggs",
		"Legginggs",
		"Legginggs",
		"Legginggs",
	];
	const [dataCategory, setDataCategory] = React.useState<string>("Women");
	return (
		<View
			style={{
				flex: 1,
				gap: 20,
			}}
		>
			<View style={styles.datacategoryrange}>
				<Pressable
					style={[
						dataCategory === "Women"
							? styles.currentdatacategoryrange
							: null,
						styles.datacategory,
					]}
					onPress={() => setDataCategory("Women")}
				>
					<Text>Women</Text>
				</Pressable>

				<Pressable
					style={[
						dataCategory === "Men"
							? styles.currentdatacategoryrange
							: null,
						styles.datacategory,
					]}
					onPress={() => setDataCategory("Men")}
				>
					<Text>Men</Text>
				</Pressable>
				<Pressable
					style={[
						dataCategory === "Kids"
							? styles.currentdatacategoryrange
							: null,
						styles.datacategory,
					]}
					onPress={() => setDataCategory("Kids")}
				>
					<Text>Kids</Text>
				</Pressable>
			</View>
			<View style={styles.container}>
				<View style={styles.promorange}>
					<Text style={styles.promotitle}>SUMMER SALES</Text>
					<Text style={styles.promosubtitle}>Up to 50% off</Text>
				</View>
				<ScrollView
					
					contentContainerStyle={styles.scrollcategoryrange}
					showsVerticalScrollIndicator={false}
				>
					{categories.map((current) => (
						<ProductCardCategory
							category={current}
							imageUrl={roughImage}
						/>
					))}
				</ScrollView>
			</View>
		</View>
	);
};

export default Categories;
