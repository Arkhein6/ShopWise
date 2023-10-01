import {
	View,
	Text,
	Pressable,
	Image,
	ImageSourcePropType,
} from "react-native";
import React from "react";
import { promoCodeCard as styles } from "./styles";

type promoCodeProps = {
	imageUri?: ImageSourcePropType;
	daysLeft: number;
	discount: number;
	title: string;
	promocode: string;
};
const randomColors: string[] = [
	"blue",
	"red",
	"black",
	"green",
	"pink",
	"brown",
];
const PromoCodeCard = (props: promoCodeProps) => {
	return (
		<View style={styles.container}>
			<View
				style={[
					styles.discountrange,
					!props.imageUri && {
						backgroundColor:
							randomColors[
								Math.random() * randomColors.length - 1
							],
					},
				]}
			>
				{props.imageUri && (
					<Image
						style={styles.image}
						source={props.imageUri}
					/>
				)}
				<Text
					style={{ color: "white", fontSize: 40, fontWeight: "bold" }}
				>
					{props.discount}
				</Text>
				<View>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							fontSize: 15,
						}}
					>
						%
					</Text>
					<Text style={{ color: "white", fontWeight: "bold" }}>
						off
					</Text>
				</View>
			</View>
			<View style={styles.textrange}>
				<View style={styles.titlerange}>
					<Text style={{
                        fontWeight:'bold'
                    }}>{props.title}</Text>
					<Text style={styles.textgray}>{props.promocode}</Text>
				</View>
				<View style={styles.buttonrange}>
					<Text style={styles.textgray}>{props.daysLeft} days remaining</Text>
					<Pressable style={styles.button}>
						<Text
							style={{
								color: "white",
                                fontWeight:'bold'
							}}
						>
							Apply
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default PromoCodeCard;
