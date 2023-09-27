import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { shopCategories as styles } from "./styles";
import { Link } from "expo-router";

const index = () => {
	const categories: string[] = [
		"T-shirts",
		"Crop tops",
		"sleeveless",
		"Sneakers",
		"Skirts",
		"NightWear",
	];
	const [currentCategory, setCurrentCategory] = React.useState(categories[0]);
	return (
		<View>
			<Text style={styles.maintitle}>Women's Tops</Text>
			<ScrollView
				horizontal
				contentContainerStyle={styles.shopcategoriescontainer}
				showsHorizontalScrollIndicator={false}
			>
				{categories.map((current, idx) => (
					<Pressable
						key={idx}
						onPress={() => {
							setCurrentCategory(current);
						}}
						style={[
							styles.shopcategories,
							current === currentCategory ? styles.shopcurrentcategory : null,
						]}
					>
						<Text
							style={
								current === currentCategory ? { color: "white" } : null
							}
						>
							{current}
						</Text>
					</Pressable>
				))}
                <Link href={'/home/Shop/Categories'} asChild>
                <Pressable style={[styles.shopcategories,]}>
                    <Text>View all</Text>
                </Pressable>
                </Link>
			</ScrollView>
		</View>
	);
};

export default index;
