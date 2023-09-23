import { View, Text, Image, ScrollView,Pressable } from "react-native";
import React from "react";
import image from "../../assets/images/pexels8.jpg";
import { profileStyles as styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

const Profile = () => {
	return (
		<View style={{gap:10,backgroundColor:'white',flex:1}}>
			<View style={[styles.inner,{alignSelf:'center'}]}>
				<Text style={styles.maintitle}>My Profile</Text>
				<View style={styles.imagerange}>
					<Image style={styles.image} source={image} />
					<View>
						<Text style={styles.title}>Matilda Brown</Text>
						<Text style={styles.subtitle}>matildabrown@gmail.com</Text>
					</View>
				</View>
			</View>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.inner}>
					<Pressable style={styles.listitem}>
						<Text style={styles.title}>My orders</Text>
						<Text style={styles.subtitle}>Already have 12 orders</Text>
						<AntDesign style={styles.icon} name="arrowright" size={18} color="gray" />
					</Pressable>
					<Pressable style={styles.listitem}>
						<Text style={styles.title}>Shipping addresses</Text>
						<Text style={styles.subtitle}>3 addresses</Text>
						<AntDesign style={styles.icon} name="arrowright" size={18} color="gray" />
					</Pressable>
					<Pressable style={styles.listitem}>
						<Text style={styles.title}>Payment methods</Text>
						<Text style={styles.subtitle}>Visa **34</Text>
						<AntDesign style={styles.icon} name="arrowright" size={18} color="gray" />
					</Pressable>
					<Pressable style={styles.listitem}>
						<Text style={styles.title}>Promocodes</Text>
						<Text style={styles.subtitle}>You have special promocodes</Text>
						<AntDesign style={styles.icon} name="arrowright" size={18} color="gray" />
					</Pressable>
					<Pressable style={styles.listitem}>
						<Text style={styles.title}>My reviews</Text>
						<Text style={styles.subtitle}>Reviews for 4 items</Text>
						<AntDesign style={styles.icon} name="arrowright" size={18} color="gray" />
					</Pressable>
					<Pressable style={styles.listitem}>
						<Text style={styles.title}>Settings</Text>
						<Text style={styles.subtitle}>Notifications, password</Text>
						<AntDesign style={styles.icon} name="arrowright" size={18} color="gray" />
					</Pressable>
				</View>
			</ScrollView>
		</View>
	);
};

export default Profile;
