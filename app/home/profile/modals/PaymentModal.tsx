import {
	View,
	Text,
	Modal,
	Pressable,
	ScrollView,
	TextInput
} from "react-native";
import React, { ReactNode } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Router, useRouter } from "expo-router";
import { Ionicons, Entypo, AntDesign,FontAwesome } from "@expo/vector-icons";
import { CommonStyles as styles } from "../../../account/styles";

const LoginSchema = Yup.object().shape({
	name:Yup.string().required("name is required"),
	expireDate: Yup.string().required('it is required').max(6,'cannot exceed'),
	id: Yup.number().required("it is required").max(3,"cannot exceed three"),
	cardNumber:Yup.number().required("it is required").max(16,"cannot exceed three"),
});

const PaymentModal = ({
	visible,
	onClose,
}: {
	visible: boolean;
	onClose: () => void;
}) => {
    const router: Router = useRouter()

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<Pressable onPress={onClose} style={{ flex: 1 }}></Pressable>
			
				<ScrollView style={styles.inner} contentContainerStyle={{
                height:'auto',
				backgroundColor:'green',
				borderTopRightRadius:30,
				borderTopLeftRadius:30
            }} showsVerticalScrollIndicator={false}>
				<Text style={styles.title}>Add new card</Text>
				<Formik
					initialValues={{
						name: "",
						cardNumber: "",
						expireDate:"",
						id: "",

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
										errors.cardNumber && touched.cardNumber
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="cardNumber"
										onChangeText={handleChange("cardNumber")}
										onBlur={handleBlur("cardNumber")}
										value={values.cardNumber}
										style={styles.input}
									></TextInput>
									{values.cardNumber.length >= 1 &&
										(errors.cardNumber && touched.cardNumber ? (
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
										{errors.cardNumber && touched.cardNumber ? (
										<Text style={styles.invalidSignUpText}>
											{errors.cardNumber}
										</Text>
									) : null}
								</View>
								<View
									style={[
										styles.textInput,
										errors.expireDate && touched.expireDate
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="expireDate"
										onChangeText={handleChange("expireDate")}
										onBlur={handleBlur("expireDate")}
										value={values.expireDate}
										style={styles.input}
									></TextInput>
									{values.expireDate.length >= 1 &&
										(errors.expireDate && touched.expireDate ? (
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
										{errors.expireDate && touched.expireDate ? (
										<Text style={styles.invalidSignUpText}>
											{errors.expireDate}
										</Text>
									) : null}
								</View>
								<View
									style={[
										styles.textInput,
										errors.id && touched.id
											? styles.invalidBox
											: null,
									]}
								>
									<TextInput
										placeholder="id"
										onChangeText={handleChange("id")}
										onBlur={handleBlur("id")}
										value={values.id}
										style={styles.input}
									></TextInput>
									{values.id.length >= 1 &&
										(errors.id && touched.id ? (
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
										{errors.id && touched.id ? (
										<Text style={styles.invalidSignUpText}>
											{errors.id}
										</Text>
									) : null}
								</View>
							</View>
							<View style={styles.button}>
								<Pressable onPress={() => handleSubmit()}>
									<Text>ADD CARD</Text>
								</Pressable>
							</View>
						</>
					)}
				</Formik>
			</ScrollView>
		</Modal>
	);
};

export default PaymentModal;
