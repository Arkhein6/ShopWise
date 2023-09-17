import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	CommonStyles as styles,
	ForgotPasswordStyles as nextStyles,
} from "./styles";
import { Ionicons,FontAwesome } from "@expo/vector-icons";
import { Router, useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email("Not a valid Email Address").required("Required"),
});

const ForgotPassword = () => {
	const router: Router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={styles.inner}
				showsVerticalScrollIndicator={false}
			>
				<Text style={styles.title}>Forgot password</Text>
				<Formik
					initialValues={{ email: "" }}
					validationSchema={ForgotPasswordSchema}
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
						<View>
							<View style={nextStyles.textInputSection}>
								<Text>
									Please enter your email address. You will
									receive a link to create a new password via
									email
								</Text>
								<View style={styles.textInputs}>
									<View style={[styles.textInput,errors.email && touched.email ? styles.invalidBox: null]}>
										<TextInput
											placeholder="Email"
											onChangeText={handleChange("email")}
											onBlur={handleBlur("email")}
											value={values.email}
                      style={styles.input}
                      
										></TextInput>
                      {values.email.length >= 1 &&( errors.email && touched.email ? <FontAwesome name="times" size={20} color="red" style={styles.inputConfirm}/>:
                      <Ionicons
											name="checkmark-sharp"
											size={20}
											color="green"
											style={styles.inputConfirm}
										/>)
                    }
                    
										
									</View>
                  {errors.email && touched.email ? (
											<Text style={styles.invalidText}>{errors.email}</Text>
										) : null}
								</View>
							</View>
							<View style={styles.button}>
								<Pressable onPress={() => handleSubmit()}>
									<Text>SEND</Text>
								</Pressable>
							</View>
						</View>
					)}
				</Formik>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ForgotPassword;
