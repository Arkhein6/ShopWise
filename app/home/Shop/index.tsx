import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { shopCategories as styles } from "./styles";
import { Link } from "expo-router";
import {
	MaterialCommunityIcons,
	FontAwesome5,
	Ionicons,
} from "@expo/vector-icons";

const index = () => {
	const categories: string[] = [
		"T-shirts",
		"Crop tops",
		"sleeveless",
		"Sneakers",
		"Skirts",
		"NightWear",
	];
	const [currentCategory, setCurrentCategory] = useState(categories[0]);
	const [productView, setProductView] = useState<"Grid" | "List">("Grid");
	return (
		<View>
			<View style={{
				gap:10,
				backgroundColor:'white'
			}}>
			<Text style={styles.maintitle}>Women's Tops</Text>
			<ScrollView
				horizontal
				contentContainerStyle={styles.shopcategoriescontainer}
				showsHorizontalScrollIndicator={false}
				style={{
					paddingLeft:'5%',

				}}
			>
				{categories.map((current, idx) => (
					<Pressable
						key={idx}
						onPress={() => {
							setCurrentCategory(current);
						}}
						style={[
							styles.shopcategories,
							current === currentCategory
								? styles.shopcurrentcategory
								: null,
						]}
					>
						<Text
							style={
								current === currentCategory
									? { color: "white" }
									: null
							}
						>
							{current}
						</Text>
					</Pressable>
				))}
				<Link href={"/home/Shop/Categories"} asChild>
					<Pressable style={styles.allcategoriesbutton}>
						<Text>View all</Text>
					</Pressable>
				</Link>
			</ScrollView>
			<View
				style={{
					flexDirection: "row",
					justifyContent:"space-between",
					paddingTop:5,
					paddingBottom:5,
					paddingLeft:'5%',
					paddingRight:'5%',
					
				}}
			>
				<>
					<Pressable
						style={{
							flexDirection: "row",
					alignItems:'center',
					gap:5

						}}
					>
						<Ionicons name="filter-sharp" size={20} color="black" />
						<Text>Filters</Text>
					</Pressable>
				</>
				<>
					<Pressable
						style={{
							flexDirection: "row",
							alignItems:'center',
					gap:5

						}}
					>
						<MaterialCommunityIcons
							name="swap-vertical"
							size={24}
							color="black"
						/>
						<Text>Price: lowest to high</Text>
					</Pressable>
				</>
				<Pressable style={{
				}}
					onPress={() =>
						setProductView((currView) =>
							currView === "Grid" ? "List" : "Grid"
						)
					}
				>
					{productView === "Grid" ? (
						<Ionicons name="grid-sharp" size={24} color="black" />
					) : (
						<FontAwesome5 name="th-list" size={24} color="black" />
					)}
				</Pressable>
			</View>
			
			</View>
		</View>
	);
};

export default index;
