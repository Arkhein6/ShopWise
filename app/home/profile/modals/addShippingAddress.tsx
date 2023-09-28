import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { addShippingAddress as styles } from "./styles";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

const addShippingAddress = () => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required("name is required"),
		address: Yup.string().required("name is required"),
		city: Yup.string().required("name is required"),
		state: Yup.string().required("name is required"),
		zipCode: Yup.string().required("name is required"),
		country: Yup.string().required("name is required"),
	});

	return (
		<View style={{
			flex:1,
			alignItems:'center',
			justifyContent:'center'
		}}>
			<Formik
				onSubmit={(values) => console.log(values)}
				initialValues={{
					name: "",
					address: "",
					city: "",
					state: "",
					zipCode: "",
					country: "",
				}}
				validationSchema={validationSchema}
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
					<View style={styles.container}>
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
									placeholder="Name of Card"
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
									errors.address && touched.address
										? styles.invalidBox
										: null,
								]}
							>
								<TextInput
									placeholder="address of Card"
									onChangeText={handleChange("address")}
									onBlur={handleBlur("address")}
									value={values.address}
									style={styles.input}
								></TextInput>
								{values.address.length >= 1 &&
									(errors.address && touched.address ? (
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
								{errors.address && touched.address ? (
									<Text style={styles.invalidSignUpText}>
										{errors.address}
									</Text>
								) : null}
							</View>
                            <View
								style={[
									styles.textInput,
									errors.city && touched.city
										? styles.invalidBox
										: null,
								]}
							>
								<TextInput
									placeholder="city of Card"
									onChangeText={handleChange("city")}
									onBlur={handleBlur("city")}
									value={values.city}
									style={styles.input}
								></TextInput>
								{values.city.length >= 1 &&
									(errors.city && touched.city ? (
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
								{errors.city && touched.city ? (
									<Text style={styles.invalidSignUpText}>
										{errors.city}
									</Text>
								) : null}
							</View>
                            <View
								style={[
									styles.textInput,
									errors.state && touched.state
										? styles.invalidBox
										: null,
								]}
							>
								<TextInput
									placeholder="state of Card"
									onChangeText={handleChange("state")}
									onBlur={handleBlur("state")}
									value={values.state}
									style={styles.input}
								></TextInput>
								{values.state.length >= 1 &&
									(errors.state && touched.state ? (
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
								{errors.state && touched.state ? (
									<Text style={styles.invalidSignUpText}>
										{errors.state}
									</Text>
								) : null}
							</View>
                            <View
								style={[
									styles.textInput,
									errors.zipCode && touched.zipCode
										? styles.invalidBox
										: null,
								]}
							>
								<TextInput
									placeholder="zipCode of Card"
									onChangeText={handleChange("zipCode")}
									onBlur={handleBlur("zipCode")}
									value={values.zipCode}
									style={styles.input}
								></TextInput>
								{values.zipCode.length >= 1 &&
									(errors.zipCode && touched.zipCode ? (
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
								{errors.zipCode && touched.zipCode ? (
									<Text style={styles.invalidSignUpText}>
										{errors.zipCode}
									</Text>
								) : null}
							</View>
                            <View
								style={[
									styles.textInput,
									errors.country && touched.country
										? styles.invalidBox
										: null,
								]}
							>
								<TextInput
									placeholder="country of Card"
									onChangeText={handleChange("country")}
									onBlur={handleBlur("country")}
									value={values.country}
									style={styles.input}
								></TextInput>
								{values.country.length >= 1 &&
									(errors.country && touched.country ? (
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
								{errors.country && touched.country ? (
									<Text style={styles.invalidSignUpText}>
										{errors.country}
									</Text>
								) : null}
							</View>
                            
						</View>
						<View style={styles.button}>
							<Pressable onPress={() => handleSubmit()}>
								<Text style={{
									color:'white'
								}}>Save Address</Text>
							</Pressable>
						</View>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default addShippingAddress;
