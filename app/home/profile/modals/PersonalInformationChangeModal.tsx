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
	name: Yup.string().required("name is required"),
	dateOfBirth: Yup.date().required("date is required")
});

const PersonalInformationChangeModal = ({
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
					<Text style={styles.title}>Update Profile</Text>
					<Formik
						initialValues={{
							name: "",
							dateOfBirth: "",
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
											errors.name && touched.name
												? styles.invalidBox
												: null,
										]}
									>
										<TextInput
											placeholder="name of Card"
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
											<Text
												style={styles.invalidSignUpText}
											>
												{errors.name}
											</Text>
										) : null}
									</View>
									<View
										style={[
											styles.textInput,
											errors.dateOfBirth &&
											touched.dateOfBirth
												? styles.invalidBox
												: null,
										]}
									>
										<TextInput
											placeholder="Card Number"
											onChangeText={handleChange(
												"dateOfBirth"
											)}
											onBlur={handleBlur("dateOfBirth")}
											value={values.dateOfBirth}
											style={styles.input}
										></TextInput>
										{values.dateOfBirth.length >= 1 &&
											(errors.dateOfBirth &&
											touched.dateOfBirth ? (
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
										{errors.dateOfBirth &&
										touched.dateOfBirth ? (
											<Text
												style={styles.invalidSignUpText}
											>
												{errors.dateOfBirth}
											</Text>
										) : null}
									</View>
									
									
								</View>
								<View style={styles.button}>
									<Pressable onPress={() => handleSubmit()}>
										<Text>Update profile</Text>
									</Pressable>
								</View>
							</>
						)}
					</Formik>
				</View>
			
		</Modal>
	);
};

export default PersonalInformationChangeModal;
