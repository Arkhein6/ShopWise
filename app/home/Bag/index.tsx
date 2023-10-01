import {
	View,
	Text,
	ScrollView,
	Pressable,
	ImageSourcePropType,
	TextInput,
} from "react-native";
import {useState} from "react";
import roughImage from "../../../assets/images/pexels8.jpg";
import ProductCardBag from "../../../components/ProductCardBag";
import { bag as styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import PromoCodeModal from "./modals/PromoCodeModal";
import { Link } from "expo-router";
import CheckoutModal from "./modals/CheckoutModal";

type bagOrderProps = {
	itemName: string;
	color: string;
	size: string;
	price: number;
	imageUrl: ImageSourcePropType;
};
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
	},{
		itemName: "Sport Dress",
		color: "Black",
		size: "M",
		price: 43,
		imageUrl: roughImage,
	},{
		itemName: "Sport Dress",
		color: "Black",
		size: "M",
		price: 43,
		imageUrl: roughImage,
	},{
		itemName: "Sport Dress",
		color: "Black",
		size: "M",
		price: 43,
		imageUrl: roughImage,
	},{
		itemName: "Sport Dress",
		color: "Black",
		size: "M",
		price: 43,
		imageUrl: roughImage,
	},
];

const index = () => {
	const [promoCodeModalVisible,setPromoCodeModalVisible] = useState<boolean>(false)
	const [checkoutModalVisible,setCheckoutModalVisible] = useState<boolean>(false)
  
	const openModal = (handler: React.Dispatch<React.SetStateAction<boolean>>)  => {
	  handler(true)
  
	}
	const closeModal = (handler: React.Dispatch<React.SetStateAction<boolean>>): void => {
	  handler(false)
	}
	return (
		<View
			style={{
				alignItems: "center",
			}}
		>
			<View
				style={{
					width: "90%",
                    height:'100%',
                    gap:20

				}}
			>
				<Text style={{
                    fontWeight:'bold',
                    fontSize:30
                }}>My Bag</Text>
				<ScrollView
					contentContainerStyle={{
						gap: 20,
					}}
				showsVerticalScrollIndicator={false}>
					{bagOrder.map((curr, idx) => (
						<Pressable key={idx}>
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
				<View style={styles.ordercheckoutrange}>
					<Pressable onPress={() => openModal(setPromoCodeModalVisible)} style={styles.promorange}> 
						<View>
							<Text>Enter your Promo code</Text>
						</View>
						<Pressable style={styles.promoicon}>

                        <AntDesign name="arrowright" size={20} color="white" />
                        </Pressable>
					</Pressable>
					<View style={styles.checkoutrange}>
						<View style={styles.amountrange}>
							<Text style={styles.graytext}>Total Amount:</Text>
							<Text style={styles.amount}>120$</Text>
						</View>
						<>
						<Pressable onPress={() => openModal(setCheckoutModalVisible)} style={styles.checkout}>
							<Text
								style={{
									color: "white",
								}}
								>
								Checkout
							</Text>
						</Pressable>
								</>
					</View>
				</View>
			</View>
			<PromoCodeModal visible={promoCodeModalVisible} onClose={() => closeModal(setPromoCodeModalVisible)}/>
			<CheckoutModal visible={checkoutModalVisible} onClose={() => closeModal(setCheckoutModalVisible)}/>
		</View>
	);
};

export default index;
