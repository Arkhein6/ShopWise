import { View, Text, ImageSourcePropType, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";
import { productCardBag as styles } from "./styles";

type productProps = {
	imageUrl: ImageSourcePropType;
	title: string;
	actualPrice: number;
	color: string;
	size: string;
};
const ProductCardBag = (props: productProps) => {
	const [orderUnits, setOrderUnits] = useState(1);
	return (
		<View style={styles.container}>
			<View style={styles.imagerange}>
				<Image style={styles.image} source={props.imageUrl} />
			</View>
			<View style={styles.textrange}>
				<Text style={styles.title}>{props.title}</Text>
				<View style={styles.specsrange}>
					<Text style={[{fontSize:13, color:'gray'},]}>Color: </Text>
					<Text style={[{fontSize:13,paddingRight:10}]}>{props.color}</Text>
					<Text style={[{fontSize:13, color:'gray'},]}>Size: </Text>
					<Text style={[{fontSize:13}]}>{props.size}</Text>
				</View>
				<View style={styles.iconrange}> 
					<View style={styles.icon}>
						<AntDesign name="minus" size={24} color="gray" />
					</View>
					<Text>{orderUnits}</Text>
					<View style={styles.icon}>
						<AntDesign name="plus" size={24} color="gray" />
					</View>
				</View>
				<View style={styles.threedots}>
					<Entypo
						name="dots-three-vertical"
						size={24}
						color="black"
					/>
				</View>
				<View style={styles.price}>
					<Text>{props.actualPrice}$</Text>
				</View>
			</View>
		</View>
	);
};

export default ProductCardBag;
