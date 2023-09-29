import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { shopCategories as styles } from "./styles";
import { Link } from "expo-router";
import { MaterialCommunityIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';

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
                <Pressable style={styles.allcategoriesbutton}>
                    <Text>View all</Text>
                </Pressable>
                </Link>
			</ScrollView>
			<View style={{
				flexDirection:'row'
			}}>
				<View style={{
				flexDirection:'row'
			}}> 
				<Ionicons name="filter-sharp" size={24} color="black" />
					<Text>Filters</Text>
				</View>
				<View style={{
				flexDirection:'row'
			}}>
				<MaterialCommunityIcons name="swap-vertical" size={24} color="black" />
					<Text>Price: lowest to high</Text>
				</View>
				<View style={{
				flexDirection:'row'
			}}>
				<FontAwesome5 name="th-list" size={24} color="black" />
				<Ionicons name="grid-sharp" size={24} color="black" />
				</View>
			</View>
		</View>
	);
};

export default index;
