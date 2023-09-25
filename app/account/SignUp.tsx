import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonStyles as styles } from "./styles";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import createUser from "../../Utils/account/createUser";

const SignupSchema = Yup.object().shape({
	name: Yup.string().required("Required").min(2, "name is too short"),
	email: Yup.string().email("Not a valid email Address").required("Required"),
	password: Yup.string()
		.min(6, "password must be 6 to 20 characters long")
		.required("Required"),
});

const SignUp = () => {
	const router: Router = useRouter();
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={styles.inner}
				contentContainerStyle={{
					height: 700,
				}}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.title}>SignUp</Text>
				<Formik
					initialValues={{
						name: "",
						email: "",
						password: "",
					}}
					validationSchema={SignupSchema}
					onSubmit={(values,actions): void => {
						createUser(values)
						actions.resetForm()				
					}}
					validateOnChange={true}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						touched,
						isSubmitting
					}) => (
						<>
							<View style={styles.textInputs}>
								<View
									style={[
										styles.textInput,
										errors.name && touched.name
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="name"
										onChangeText={handleChange("name")}
										onBlur={handleBlur("name")}
										value={values.name}
										style={styles.input}
									></TextInput>
									{values.name.length >= 1 &&
										(errors.name && touched.name ? (
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
									{errors.name && touched.name ? (
										<Text style={styles.invalidSignUpText}>
											{errors.name}
										</Text>
									) : null}
								</View>
								<View
									style={[
										styles.textInput,
										errors.email && touched.email
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="email"
										onChangeText={handleChange("email")}
										onBlur={handleBlur("email")}
										value={values.email}
										style={styles.input}
									></TextInput>
									{values.email.length >= 1 &&
										(errors.email && touched.email ? (
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
										{errors.email && touched.email ? (
										<Text style={styles.invalidSignUpText}>
											{errors.email}
										</Text>
									) : null}
								</View>
								<View
									style={[
										styles.textInput,
										errors.password && touched.password
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="password"
										onChangeText={handleChange("password")}
										onBlur={handleBlur("password")}
										value={values.password}
										style={styles.input}
									></TextInput>
									{values.password.length >= 1 &&
										(errors.password && touched.password ? (
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
										{errors.password && touched.password ? (
										<Text style={styles.invalidSignUpText}>
											{errors.password}
										</Text>
									) : null}
								</View>
								<Pressable
									style={styles.signInCheck}
									onPress={(): void =>
										router.push("/account/Login")
									}
								>
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
							<View style={[styles.button,isSubmitting? styles.disabledButton : null]}>
								<Pressable disabled={isSubmitting} onPress={() => handleSubmit()}>
									<Text>SIGN UP</Text>
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

export default SignUp;
