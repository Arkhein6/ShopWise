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
                  fontWeight:'bold'
								}}
							>
								NEW
							</Text>
						</View>
					)}
					{props?.discountRate && (
						<View style={styles.discountoverlay}>
							<Text style={{color:'white',fontWeight:'bold'}}>
							-{props.discountRate}%
						</Text>
						</View>
					)}
				</View>
				<View style={styles.heart}>
					<AntDesign name="hearto" size={24} color="black" />
				</View>
			</View>
			<View style={styles.ratings}>
				{props.ratings === 0
					? new Array(Math.floor(props.ratings))
							.fill(0)
							.map((curr, idx) => {
								return (
									<AntDesign
										key={idx}
										name="staro"
										size={20}
										color="yellow"
									/>
								);
							})
					: new Array(Math.floor(props.ratings))
							.fill(0)
							.map((curr, idx) => {
								return (
									<AntDesign
										key={idx}
										name="star"
										size={20}
										color="yellow"
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
				<Text style={{ color: props?.discountRate ? "red" : "black" }}>
					{props.actualPrice}$
				</Text>
			</View>
		</View>
	);
};

export default ProductCardGrid;
