import { View, Text, ScrollView,Pressable } from "react-native";
import React from "react";
import { filters as styles } from "./styles";

const Filters = () => {
	return (
		<View>
			<ScrollView showsVerticalScrollIndicator={false}>
				
			</ScrollView>
            <View>
                <Pressable><Text>Discard</Text></Pressable>
                <Pressable><Text>Apply</Text></Pressable>
            </View>
		</View>
	);
};

export default Filters;
