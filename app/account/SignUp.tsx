import { Text, View, TextInput, Pressable, ScrollView} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignUpStyles as styles } from "./styles";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";

const SignUp = () => {
    const router: Router = useRouter()


	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.inner} contentContainerStyle={{
                
                height:700
            }} showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>SignUp</Text>
				<View style={styles.textInputs}>
					<View style={styles.textInput}>
						<TextInput placeholder="Username"></TextInput>
						<Ionicons
							name="checkmark-sharp"
							size={24}
							color="green"
							style={styles.inputConfirm}
						/>
					</View>
					<View style={styles.textInput}>
						<TextInput placeholder="Email"></TextInput>
						<Ionicons
							name="checkmark-sharp"
							size={24}
							color="green"
							style={styles.inputConfirm}
						/>
					</View>
					<View style={styles.textInput}>
						<TextInput placeholder="Password"></TextInput>
						<Ionicons
							name="checkmark-sharp"
							size={24}
							color="green"
							style={styles.inputConfirm}
						/>
					</View>
					<Pressable style={styles.signInCheck} onPress={():void => router.push('/account/Login')}>
						<Text>Already have an account?</Text>
						<View>
							<AntDesign
								name="arrowright"
								size={20}
								color="red"
							/>
						</View>
					</Pressable>
				</View>
				<View style={styles.button}>
					<Pressable>
						<Text>SIGN UP</Text>
					</Pressable>
				</View>
				<View style={styles.links}>
					<Text>Or sign up with social account</Text>
					<View style={styles.socialLinks}>
						<View style={styles.link}>
							<AntDesign name="google" size={24} color="red" />
						</View>
						<View style={styles.link}>
							<Entypo name="facebook" size={24} color="blue" />
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
