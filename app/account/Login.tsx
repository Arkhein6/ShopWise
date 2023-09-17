import { Text, View, TextInput, Pressable, ScrollView} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonStyles as styles } from "./styles";
import { Ionicons, Entypo, AntDesign,FontAwesome } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
	Email: Yup.string().email("Not a valid Email Address").required("Required"),
	Password: Yup.string().required("Required"),
});

const Login = () => {
    const router: Router = useRouter()


	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.inner} contentContainerStyle={{
                height:700
            }} showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Login</Text>
				<Formik
					initialValues={{
						Email: "",
						Password: "",
					}}
					validationSchema={LoginSchema}
					onSubmit={(values) => console.log(values)}
					validateOnChange={true}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						touched,
					}) => (
						<>
							<View style={styles.textInputs}>
								<View
									style={[
										styles.textInput,
										errors.Email && touched.Email
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="Email"
										onChangeText={handleChange("Email")}
										onBlur={handleBlur("Email")}
										value={values.Email}
										style={styles.input}
									></TextInput>
									{values.Email.length >= 1 &&
										(errors.Email && touched.Email ? (
											<FontAwesome
												name="times"
												size={20}
												color="red"
												style={styles.inputConfirm}
											/>
										) : (
											<Ionicons
												name="checkmark-sharp"
												size={20}
												color="green"
												style={styles.inputConfirm}
											/>
										))}
										{errors.Email && touched.Email ? (
										<Text style={styles.invalidSignUpText}>
											{errors.Email}
										</Text>
									) : null}
								</View>
								<View
									style={[
										styles.textInput,
										errors.Password && touched.Password
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="Password"
										onChangeText={handleChange("Password")}
										onBlur={handleBlur("Password")}
										value={values.Password}
										style={styles.input}
									></TextInput>
									{values.Password.length >= 1 &&
										(errors.Password && touched.Password ? (
											<FontAwesome
												name="times"
												size={20}
												color="red"
												style={styles.inputConfirm}
											/>
										) : (
											<Ionicons
												name="checkmark-sharp"
												size={20}
												color="green"
												style={styles.inputConfirm}
											/>
										))}
										{errors.Password && touched.Password ? (
										<Text style={styles.invalidSignUpText}>
											{errors.Password}
										</Text>
									) : null}
								</View>
								<Pressable
									style={styles.signInCheck}
									onPress={(): void =>
										router.push("/account/ForgotPassword")
									}
								>
									<Text>Forgot your password?</Text>
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
								<Pressable onPress={() => handleSubmit()}>
									<Text>LOGIN</Text>
								</Pressable>
							</View>
						</>
					)}
				</Formik>
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

export default Login;
