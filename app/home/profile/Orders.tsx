import { View, Text, Pressable } from "react-native";
import React from "react";
import MyOrdersCard from "../../../components/MyOrdersCard";
import { ScrollView } from "react-native-gesture-handler";
import { orders as styles } from "./styles";

const Orders = () => {
  const [filter,setFilter] = React.useState<string>("Delivered")
  const filtersArray: string[] = ['Delivered','Processing','Cancelled','Pending']
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
          gap:20
				}}
			>
				<Text style={styles.maintitle}>My Orders</Text>
				<ScrollView
					horizontal
					contentContainerStyle={styles.filtercontainer}
          showsHorizontalScrollIndicator={false}
				>
					{
            filtersArray.map((current,idx) => (
              <Pressable key={idx} onPress={() => {
                setFilter(current)
              }} style={[styles.filters,current === filter ? styles.currentfilter: null]}>
                <Text style={current === filter ? {color:'white' }: null}>{current}</Text>
              </Pressable>
            ))
          }
				</ScrollView>
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
