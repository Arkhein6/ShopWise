import { View, StyleSheet, Text, ScrollView } from "react-native";
import AnimatedStickyHeader from "../../components/AnimatedStickyHeader";
import ProductCardGrid from "../../components/ProductCardGrid";
import image from "../../assets/images/pexels8.jpg";
import ProductCardCategory from "../../components/ProductCardCategory";
import ProductCardBag from "../../components/ProductCardBag";
import ProductCardFavorites from "../../components/ProductCardFavorites";
import ProductCardList from "../../components/ProductCardList";
import ProductCardOrder from "../../components/ProductCardOrder";

function Home() {
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
export default Home;
