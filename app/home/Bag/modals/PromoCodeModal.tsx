import {
	View,
	Text,
	Modal,
	Pressable,
	TextInput,
	ScrollView,
	ImageSourcePropType,
} from "react-native";
import React from "react";
import { promoCodeCard as styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import imagee from "../../../../assets/images/pexels8.jpg";
import PromoCodeCard from "../../../../components/PromoCodeCard";

type promoCodeProps = {
	imageUri?: ImageSourcePropType;
	daysLeft: number;
	discount: number;
	title: string;
	promocode: string;
};
const existingPromoCodes: promoCodeProps[] = [
	{
		imageUri: imagee,
		daysLeft: 6,
		discount: 10,
		title: "Personal Offer",
		promocode: "mypromocode2020",
	},
	{
		imageUri: imagee,
		daysLeft: 2,
		discount: 30,
		title: "Summer Sale",
		promocode: "summer2020",
	},
	{
		imageUri: imagee,
		daysLeft: 4,
		discount: 25,
		title: "Private Offer",
		promocode: "mypromosashi2021",
	},
	{
		imageUri: imagee,
		daysLeft: 10,
		discount: 22,
		title: "Personal Offer",
		promocode: "privateecode2022",
	},
	
];
const PromoCodeModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
	return (
		<Modal
			visible={visible}
			onRequestClose={onClose}
			animationType="slide"
			transparent={true}
		>
			<Pressable
				style={styles.modaloverlay}
				onPress={onClose}
			></Pressable>
			<View style={styles.container}>
				<Pressable style={styles.promorange}>
					<TextInput style={{
						flex:1
					}}placeholder="Enter your Promo code" />

					<Pressable style={styles.promoicon}>
						<AntDesign name="arrowright" size={20} color="white" />
					</Pressable>
				</Pressable>
				<Text style={styles.title}>Your Promo Codes</Text>
				<ScrollView style={{height:300}} contentContainerStyle={{
					gap:20
				}}  showsVerticalScrollIndicator={false}>
					{
						existingPromoCodes.map((current,idx) => (
							<PromoCodeCard key={idx}
							imageUri={current.imageUri}
							title={current.title}
							promocode={current.promocode}
							daysLeft={current.daysLeft}
							discount={current.discount}/>
						))
					}
				</ScrollView>
			</View>
		</Modal>
	);
};

export default PromoCodeModal;
