import { View, Text, Pressable, Modal, Image, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { checkoutModal as styles } from "./styles";
import ShippingAddressCard from "../../../../components/ShippingAddressCard";
import imageURI from "../../../../assets/images/pexels8.jpg";
import { AntDesign } from "@expo/vector-icons";

const deliveryText: string[] = ["FedEx", "USPS", "DHL"];
const CheckoutModal = ({
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
			transparent={true}
			animationType="slide"
		>
			<View style={styles.checkoutrange}>
				<Pressable onPress={onClose} style={styles.checkouticon}>
					<AntDesign name="arrowleft" size={24} color={"black"} />
				</Pressable>
				<Text style={styles.checkouttext}>Checkout</Text>
			</View>
			<View
				style={{
					backgroundColor: "#F5F5F5",
					height: "100%",
					paddingLeft: "5%",
					paddingRight: "5%",
					flex:1,
					gap:30,
					paddingTop:20

				}}
			>
				
					<View style={{
						gap:20
					}}>
						<Text style={styles.boldtext}>Shipping address</Text>
						<ShippingAddressCard
							title={"Jane Doe"}
							streetAddress="3 Newbridge COurt"
							mainAddress="Chino Hills, CA 91709, United States"
						/>
					</View>
					<View style={{
						gap:20
					}}>
						<View style={styles.paymenttextrange}>
							<Text style={styles.boldtext}>Payment</Text>
							<Text style={{
								color:'red'
							}}>Change</Text>
						</View>
						<View style={styles.paymentimagerange}>
							<Image
								style={styles.paymentimage}
								source={imageURI}
							/>
							<Text>**** **** **** 3947</Text>
						</View>
					</View>
					<View style={{
						gap:20
					}}>
						<Text style={styles.boldtext}>Delivery method</Text>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={styles.deliveryrange}
						>
							{deliveryText.map((current, idx) => (
								<View key={idx} style={styles.delivery}>
									<Text style={styles.deliveryicon}>
										{current}
									</Text>
									<Text style={styles.graytext}>
										2-3 days
									</Text>
								</View>
							))}
						</ScrollView>
					</View>
				
				<View style={{
					position:'absolute',
					bottom:'3%',
					width:'100%',
					gap:20,
					alignSelf:'center'
				}}>
					<View style={styles.submititem}>
						<Text style={styles.graytext}>Order:</Text>
						<Text style={styles.boldtext}>112$</Text>
					</View>
					<View style={styles.submititem}>
						<Text style={styles.graytext}>Delivery:</Text>
						<Text style={styles.boldtext}>15$</Text>
					</View>
					<View style={styles.submititem}>
						<Text style={styles.graytext}>Summary:</Text>
						<Text style={styles.boldtext}>127$</Text>
					</View>
					<>
						<Pressable style={styles.order}>
							<Text
								style={{
									color: "white",
								}}
							>
								SUBMIT ORDER
							</Text>
						</Pressable>
					</>
				</View>
			</View>
		</Modal>
	);
};

export default CheckoutModal;
