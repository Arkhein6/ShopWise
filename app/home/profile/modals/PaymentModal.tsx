import { View, Text } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const PaymentModal = () => {
	const isPresented: boolean = router.canGoBack();
    console.log(isPresented)

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>	{!isPresented && (
				<Link href="../">
					<Text style={{
                        fontSize:40, color:'red'
                    }}>Dismiss</Text>
				</Link>
			)}
			<StatusBar style="dark" />
		</View>
	);
};

export default PaymentModal;
