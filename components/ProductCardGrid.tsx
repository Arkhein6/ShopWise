import { View, Text, Image, ImageSourcePropType } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { productCardGrid as styles } from "./styles";

type productProps = {
	imageUrl: ImageSourcePropType;
	discountRate?: number;
	isNew?: boolean;
	ratings: number;
	subTitle: string;
	title: string;
	actualPrice: number;
};
const ProductCardGrid = (props: productProps) => {
	console.log(Math.floor(props.ratings))
	return (
		<View style={styles.container}>
			<View style={styles.imagerange}>
				<Image style={styles.image} source={props.imageUrl} />
				<View style={styles.imageoverlay}>
					{props?.isNew && (
						<View style={styles.newtextoverlay}>
							<Text
								style={{
									color: "white",
									fontWeight: "bold",
								}}
							>
								NEW
							</Text>
						</View>
					)}
					{props?.discountRate && (
						<View style={styles.discountoverlay}>
							<Text
								style={{ color: "white", fontWeight: "bold" }}
							>
								-{props.discountRate}%
							</Text>
						</View>
					)}
				</View>
				<View style={styles.heart}>
					<AntDesign name="hearto" size={18} color="gray" />
				</View>
			</View>
			<View style={styles.ratings}>
				{new Array(5).fill(0).map((curr, idx) => {
					console.log(idx <= Math.floor(props.ratings))
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
			<Text style={styles.subtitle}>{props.subTitle}</Text>
			<Text style={styles.title}>{props.title}</Text>
			<View style={styles.pricerange}>
				{props?.discountRate && (
					<Text style={styles.discountprice}>
						{(
							props.actualPrice -
							(props.discountRate / 100) * props.actualPrice
						).toFixed(2)}
						$
					</Text>
				)}
				<Text style={{ color: props?.discountRate ? "#FF3E3E" : "black" }}>
					{props.actualPrice}$
				</Text>
			</View>
		</View>
	);
};

export default ProductCardGrid;
