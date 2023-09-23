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
			<ScrollView contentContainerStyle={{gap:20}}>
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
				<ProductCardBag
					imageUrl={image}
					title="Pullover"
					color="Black"
					size="L"
					actualPrice={51}
				/>
				<ProductCardList
					title="Evening Dress"
					subTitle="Dorothy Markins"
					isNew={true}
					discountRate={21}
					ratings={4.5}
					actualPrice={12}
					imageUrl={image}
				/>
				<ProductCardFavorites
					imageUrl={image}
					title="Longsleeve Violeta"
					subtitle="Mango"
					color="Orange"
					size="S"
					actualPrice={46}
					ratings={0}
				/>
				
				<ProductCardOrder imageUrl={image} title="Pullover" subtitle="Mango" color="Gray" size="L" units={1} actualPrice={51}/>
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
