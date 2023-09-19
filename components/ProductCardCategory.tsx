import { View, Text, ImageSourcePropType, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";

type productProps = {
	imageUrl: ImageSourcePropType;
	category: string;
};
const ProductCardCategory = (props: productProps) => {
	return (
		<View>
			<View>
				<Text>{props.category}</Text>
			</View>
			<View>
				<Image source={props.imageUrl} />
			</View>
		</View>
	);
};

export default ProductCardCategory;
