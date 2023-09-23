import { View, Text, ImageSourcePropType, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";
import { productCardOrder as styles } from "./styles";

type productProps = {
	imageUrl: ImageSourcePropType;
	title: string;
	subtitle: string;
	actualPrice: number;
	color: string;
	size: string;
	units: number;
};
const ProductCardOrder = (props: productProps) => {
	const [orderUnits, setOrderUnits] = useState(1);
	return (
		<View style={styles.container}>
			<View style={styles.imagerange}>
				<Image style={styles.image} source={props.imageUrl} />
			</View>
			<View style={styles.textrange}>
				<Text style={styles.subtitle}>{props.subtitle}</Text>
				<Text style={styles.title}>{props.title}</Text>
				<View style={styles.specsrange}>
					<Text style={[{ fontSize: 13, color: "gray" }]}>
						Color:{" "}
					</Text>
					<Text style={[{ fontSize: 13, paddingRight: 10 }]}>
						{props.color}
					</Text>
					<Text style={[{ fontSize: 13, color: "gray" }]}>
						Size:{" "}
					</Text>
					<Text style={[{ fontSize: 13 }]}>{props.size}</Text>
				</View>
				<View style={styles.unitpricerange}>
					<View style={styles.unitrange} >
						<Text>Units: </Text>
						<Text>{props.units}</Text>
					</View>
					<View style={styles.price}>
						<Text>{props.actualPrice}$</Text>
					</View>
				</View>

			</View>
		</View>
	);
};

export default ProductCardOrder;
