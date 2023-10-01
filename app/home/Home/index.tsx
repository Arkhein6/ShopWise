import { StyleSheet,ScrollView } from "react-native";
import AnimatedStickyHeader from "../../../components/AnimatedStickyHeader";

function index() {
	return (
		<AnimatedStickyHeader>
			<ScrollView>
				
			</ScrollView>
		</AnimatedStickyHeader>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	box: {
		width: "100%",
		height: 400,
	},
	scroll: {
		backgroundColor: "red",
	},
});
export default index;
