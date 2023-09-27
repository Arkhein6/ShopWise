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
	signInCheck: {
		alignSelf: "flex-end",
		flexDirection: "row",
		alignItems: "center",
		columnGap: 5,
		marginBottom: 20,
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
	links: {
		alignItems: "center",
		justifyContent: "center",
		rowGap: 10,
		position: "absolute",
		bottom: 0,
		width: "100%",
	},
	socialLinks: {
		flexDirection: "row",
		columnGap: 10,
	},
	link: {
		backgroundColor: "white",
		height: 60,
		width: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
		elevation: 1,
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

export { paymentModal };
