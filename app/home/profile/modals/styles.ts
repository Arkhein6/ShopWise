import { StyleSheet } from "react-native";

const paymentModal = StyleSheet.create({
	modaloverlay: { 
        flex: 1,opacity:0.2,
        backgroundColor: "black", 

    },
	container: {
		backgroundColor: "white",
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
		paddingLeft: 20,
		paddingRight: 20,
		gap: 30,
        position:'absolute',
        width:'100%',
        bottom:0,
        zIndex:1000,
        opacity:1

	},
	title: {
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
        paddingTop:20
	},
	input: {
		flex: 1,
	},
	textInput: {
		backgroundColor: "white",
		flexDirection: "row",
		height: 60,
		alignItems: "center",
		position: "relative",
		paddingLeft: 10,
		elevation: 2,
	},
	textInputs: {
		rowGap: 20,
	},
	inputConfirm: {
		position: "absolute",
		right: 10,
	},
	button: {
		backgroundColor: "red",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		marginBottom: 30,
	},
	disabledButton: {
		backgroundColor: "gray",
	},
	invalidBox: {
		borderColor: "red",
		borderWidth: 1,
	},
	invalidText: {
		position: "absolute",
		bottom: -5,
		color: "red",
	},
	invalidSignUpText: {
		position: "absolute",
		bottom: -17,
		color: "red",
		fontSize: 12,
	},
});

const addShippingAddress = StyleSheet.create({
	modaloverlay: { 
        flex: 1,opacity:0.2,
        backgroundColor: "black", 

    },
	container: {
		width:'90%',
		gap:20

	},
	title: {
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
        paddingTop:20
	},
	input: {
		flex: 1,
	},
	textInput: {
		backgroundColor: "white",
		flexDirection: "row",
		height: 60,
		alignItems: "center",
		position: "relative",
		paddingLeft: 10,
		elevation: 2,
	},
	textInputs: {
		rowGap: 20,
	},
	inputConfirm: {
		position: "absolute",
		right: 10,
	},
	button: {
		backgroundColor: "red",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		marginBottom: 30,
	},
	disabledButton: {
		backgroundColor: "gray",
	},
	invalidBox: {
		borderColor: "red",
		borderWidth: 1,
	},
	invalidText: {
		position: "absolute",
		bottom: -5,
		color: "red",
	},
	invalidSignUpText: {
		position: "absolute",
		bottom: -17,
		color: "red",
		fontSize: 12,
	},
});


export { paymentModal,
addShippingAddress };
