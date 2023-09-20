import { View, StyleSheet, Text, ScrollView } from "react-native";
import AnimatedStickyHeader from "../../components/AnimatedStickyHeader";
import ProductCardGrid from "../../components/ProductCardGrid";
import image from "../../assets/images/pexels8.jpg";
import ProductCardCategory from "../../components/ProductCardCategory";
import ProductCardBag from "../../components/ProductCardBag";
import ProductCardFavorites from "../../components/ProductCardFavorites";

function Home() {
	return (
		<AnimatedStickyHeader>
			<ScrollView>
				<ProductCardGrid
					title="Evening Dress"
					subTitle="Dorothy Markins"
					isNew={true}
					discountRate={21}
					ratings={4.5}
					actualPrice={12}
					imageUrl={image}
				/>
				<ProductCardCategory category="New" imageUrl={image} />
				<ProductCardBag imageUrl={image} title="Pullover" color="Black" size="L" actualPrice={51}/>
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
