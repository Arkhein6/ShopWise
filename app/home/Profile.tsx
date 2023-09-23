import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import image from "../../assets/images/pexels8.jpg";

const Profile = () => {
	return (
		<View>
			<View>
				<Text>My Profile</Text>
				<View>
					{/* <Image source={image} /> */}
					<View>
						<Text>Matilda Brown</Text>
						<Text>matildabrown@gmail.com</Text>
					</View>
				</View>
			</View>
			<ScrollView>
				<View>
					<Text>My orders</Text>
					<Text>Already have 12 orders</Text>
				</View>
				<View>
					<Text>Shipping addresses</Text>
					<Text>3 addresses</Text>
				</View>
				<View>
					<Text>Payment methods</Text>
					<Text>Visa **34</Text>
				</View>
				<View>
					<Text>Promocodes</Text>
					<Text>You have special promocodes</Text>
				</View>
				<View>
					<Text>My reviews</Text>
					<Text>Reviews for 4 items</Text>
				</View>
				<View>
					<Text>Settings</Text>
					<Text>Notifications, password</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Profile;
