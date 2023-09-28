import {
	View,
	Text,
	Modal,
	Pressable,
	ScrollView,
	TextInput,
} from "react-native";
import React, { ReactNode } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Router, useRouter } from "expo-router";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { paymentModal as styles } from "./styles";


const LoginSchema = Yup.object().shape({
	oldPassword: Yup.string().required("oldPassword is required").min(3,"damn"),
	newPassword: Yup.string().required("it is required"),
	repeatPassword: Yup.string().required("it is required")
});

const PasswordChangeModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
	const router: Router = useRouter();

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>	
			
				<Pressable
					onPress={onClose}
					style={styles.modaloverlay}
				>
				</Pressable>
				<View style={styles.container}>
					<Text style={styles.title}>Password Change</Text>
					<Formik
						initialValues={{
							oldPassword: "",
							newPassword: "",
							repeatPassword: "",
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
									style={{
                    gap:20
                  }}	
									>
                    <View style={[
											styles.textInput,
											errors.oldPassword && touched.oldPassword
												? styles.invalidBox
												: null,
										]}>

										<TextInput
											placeholder="Old Password"
											onChangeText={handleChange("oldPassword")}
											onBlur={handleBlur("oldPassword")}
											value={values.oldPassword}
											style={styles.input}
										></TextInput>
										{values.oldPassword.length >= 1 &&
											(errors.oldPassword && touched.oldPassword ? (
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
										{errors.oldPassword && touched.oldPassword ? (
											<Text
												style={styles.invalidSignUpText}
											>
												{errors.oldPassword}
											</Text>
										) : null}
                    </View>
                    <Pressable onPress={() => router.push("/account/ForgotPassword")} style={{
                      alignSelf:'flex-end'
                    }}>
                      <Text style={{
                        color:'gray'
                      }}>Forgot Password?</Text>
                    </Pressable>
									</View>
									
									<View
										style={[
											styles.textInput,
											errors.newPassword &&
											touched.newPassword
												? styles.invalidBox
												: null,
										]}
									>
										<TextInput
											placeholder="New Password"
											onChangeText={handleChange(
												"newPassword"
											)}
											onBlur={handleBlur("newPassword")}
											value={values.newPassword}
											style={styles.input}
										></TextInput>
										{values.newPassword.length >= 1 &&
											(errors.newPassword &&
											touched.newPassword ? (
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
										{errors.newPassword &&
										touched.newPassword ? (
											<Text
												style={styles.invalidSignUpText}
											>
												{errors.newPassword}
											</Text>
										) : null}
									</View>
									<View
										style={[
											styles.textInput,
											errors.repeatPassword && touched.repeatPassword
												? styles.invalidBox
												: null,
										]}
									>
										<TextInput
											placeholder="Repeat New Password"
											onChangeText={handleChange("repeatPassword")}
											onBlur={handleBlur("repeatPassword")}
											value={values.repeatPassword}
											style={styles.input}
										></TextInput>
										{values.repeatPassword.length >= 1 &&
											(errors.repeatPassword && touched.repeatPassword ? (
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
										{errors.repeatPassword && touched.repeatPassword ? (
											<Text
												style={styles.invalidSignUpText}
											>
												{errors.repeatPassword}
											</Text>
										) : null}
									</View>
								</View>
								<View style={styles.button}>
									<Pressable onPress={() => handleSubmit()}>
										<Text>Save Password</Text>
									</Pressable>
								</View>
							</>
						)}
					</Formik>
				</View>
			
		</Modal>
	);
};

export default PasswordChangeModal;
