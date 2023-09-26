import { View, Text, Pressable } from "react-native";
import React from "react";
type myOrdersCardProps = {
	orderNumber: number;
	trackingNumber: number;
	quantity: number;
	totalAmount: number;
	trackingPrefix: string,
    status: string
};
import { myOrdersCard as styles } from "./styles";

const MyOrdersCard = (details: myOrdersCardProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.orderrange}>
				<Text style={styles.boldtext}>
					Order No{details.orderNumber}
				</Text>
				<Text style={styles.graytext}>Date</Text>
			</View>
			<View style={styles.trackingrange}>
				<Text style={styles.graytext}>
					Tracking number:{" "}
					<Text style={styles.boldtext}>
						{details.trackingPrefix}
					</Text>
					<Text style={styles.boldtext}>
						{details.trackingNumber}
					</Text>
				</Text>

				<View style={styles.quantityrange}>
					<Text style={styles.graytext}>
						Quantity:{" "}
						<Text style={styles.boldtext}>{details.quantity}</Text>
					</Text>
					<Text style={styles.graytext}>
						Total Amount: <Text style={styles.boldtext}> {details.totalAmount}</Text>$
					</Text>
				</View>
			</View>
			<View style={styles.buttonrange}>
				<Pressable style={styles.button}>
					<Text>Details</Text>
				</Pressable>
				<Text style={styles.text}>{details.status}</Text>
			</View>
		</View>
	);
};

export default MyOrdersCard;
