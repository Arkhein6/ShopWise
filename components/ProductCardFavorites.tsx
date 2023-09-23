import { View, Text, ImageSourcePropType, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign, Fontisto, Entypo } from "@expo/vector-icons";
import { productCardFavorites as styles } from "./styles";

type productProps = {
	imageUrl: ImageSourcePropType;
	title: string;
	subtitle: string;
	actualPrice: number;
	color: string;
	size: string;
	ratings: number
};
const ProductCardFavorites = (props: productProps) => {
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
					<Text style={[{fontSize:13, color:'gray'},]}>Color: </Text>
					<Text style={[{fontSize:13,paddingRight:10}]}>{props.color}</Text>
					<Text style={[{fontSize:13, color:'gray'},]}>Size: </Text>
					<Text style={[{fontSize:13}]}>{props.size}</Text>
				</View>
				<View style={styles.priceratingsrange}>
				<View style={styles.price}>
					<Text>{props.actualPrice}$</Text>
				</View>
				<View style={styles.ratings}>
				{new Array(5).fill(0).map((curr, idx) => {					
					return idx+1 <= Math.floor(props.ratings) ? (
						<AntDesign
							key={idx}
							name="star"
							size={15}
							color="#FFBA49"
						/>
					) : (
						<AntDesign
							key={idx}
							name="staro"
							size={15}
							color="black"
						/>
					);
				})}

				<Text>({props.ratings})</Text>
			</View>

				</View>
				
				<View style={styles.cross}>
					<Entypo
						name="cross"
						size={20}
						color="black"
					/>
				</View>
				
			</View>
		</View>
	);
};

export default ProductCardFavorites;
