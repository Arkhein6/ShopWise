import { StyleSheet } from "react-native";

const orders = StyleSheet.create({
	maintitle: {
		fontSize: 40,
		fontWeight: "bold",
	},
	filters: {
		backgroundColor: "white",
		borderRadius: 20,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10,
		paddingBottom: 10,
	},
	filtercontainer: {
		gap: 10,
	},
	currentfilter: {
		backgroundColor: "black",
	},
});
const settings = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	inner: {
		width: "90%",
        gap:20
	},
	switchrange: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	personalrange: {
        gap:20

	},
	passwordrange: {
        gap:20

	},
	notificationsrange: {
		gap: 10,
	},
	subtitle: {
		fontWeight: "bold",
	},
	title: {
		fontWeight: "bold",
		fontSize: 30,
	},
	output: {
		height: 60,
		elevation: 2,
		paddingLeft: 15,
		backgroundColor: "white",
		justifyContent: "center",
		gap: 2,
	},
	uppertext: {
		fontSize: 12,
	},
	subtitlerange: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	graytext: {
		color: "gray",
	},
});
export { orders, settings };
