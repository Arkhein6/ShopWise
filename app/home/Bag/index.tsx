import {
	View,
	Text,
	ScrollView,
	Pressable,
	ImageSourcePropType,
	TextInput,
} from "react-native";
import React from "react";
import roughImage from "../../../assets/images/pexels8.jpg";
import ProductCardBag from "../../../components/ProductCardBag";
import { bag as styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";

type bagOrderProps = {
	itemName: string;
	color: string;
	size: string;
	price: number;
	imageUrl: ImageSourcePropType;
};

const index = () => {
	const bagOrder: bagOrderProps[] = [
		{
			itemName: "pullover",
			color: "Black",
			size: "L",
			price: 51,
			imageUrl: roughImage,
		},
		{
			itemName: "T-Shirt",
			color: "Gray",
			size: "L",
			price: 30,
			imageUrl: roughImage,
		},
		{
			itemName: "Sport Dress",
			color: "Black",
			size: "M",
			price: 43,
			imageUrl: roughImage,
		},
	];
	return (
		<View
			style={{
				alignItems: "center",
			}}
		>
			<View
				style={{
					width: "90%",
				}}
			>
				<Text>My Bag</Text>
				<ScrollView
					contentContainerStyle={{
						gap: 20,
					}}
				>
					{bagOrder.map((curr, idx) => (
						<Pressable>
							<ProductCardBag
								imageUrl={curr.imageUrl}
								title={curr.itemName}
								color={curr.color}
								size={curr.size}
								actualPrice={curr.price}
							/>
						</Pressable>
					))}
				</ScrollView>
				<View>
					<View style={styles.promorange}>
                        
						<TextInput placeholder="Enter your promo code"></TextInput>
						<Pressable style={styles.promoicon}>

                        <AntDesign name="arrowright" size={20} color="white" />
                        </Pressable>
					</View>
					<View style={styles.checkoutrange}>
						<View style={styles.amountrange}>
							<Text style={styles.graytext}>Total Amount:</Text>
							<Text style={styles.amount}>TotalAmountcalc$</Text>
						</View>
						<Pressable style={styles.checkout}>
							<Text
								style={{
									color: "white",
								}}
							>
								Checkout
							</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
};

export default index;
