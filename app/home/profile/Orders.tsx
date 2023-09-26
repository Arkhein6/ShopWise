import { View, Text, Pressable } from "react-native";
import React from "react";
import MyOrdersCard from "../../../components/MyOrdersCard";
import { ScrollView } from "react-native-gesture-handler";
import { orders as styles } from "./styles";

const Orders = () => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
			}}
		>
			<View
				style={{
					width: "90%",
					backgroundColor: "red",
				}}
			>
				<Text>My Orders</Text>
				<ScrollView
					horizontal
					contentContainerStyle={styles.filtercontainer}
				>
					<Pressable style={styles.filters}>
						<Text>Delivered</Text>
					</Pressable>
					<Pressable style={styles.filters}>
						<Text>Processing</Text>
					</Pressable>
					<Pressable style={styles.filters}>
						<Text>Cancelled</Text>
					</Pressable>
				</ScrollView>
				<Text>Orderstree</Text>
				<MyOrdersCard
					orderNumber={1947034}
					trackingNumber={3475453455}
					trackingPrefix={"IW"}
					quantity={3}
					totalAmount={112}
					status="Delivered"
				/>
			</View>
		</View>
	);
};

export default Orders;
