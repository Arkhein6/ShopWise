import { View, Text, ImageSourcePropType, Image } from "react-native";
import React, { useState } from "react";
import { productCardCategory as styles } from "./styles";
type productProps = {
	imageUrl: ImageSourcePropType;
	category: string;
};
const ProductCardCategory = (props: productProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.textrange}>
				<Text>{props.category}</Text>
			</View>
			<View style={styles.imagerange}>
				<Image style={styles.image} source={props.imageUrl} />
			</View>
		</View>
	);
};

export default ProductCardCategory;
