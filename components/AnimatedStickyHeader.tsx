import Animated, {
	useSharedValue,
	useAnimatedStyle,
	useAnimatedScrollHandler,
} from "react-native-reanimated";
import { Text, View, StyleSheet } from "react-native";
import HeaderImage from "../assets/images/pexels8.jpg";
import { ReactNode } from "react";

const AnimatedStickyHeader = ({ children }: { children: ReactNode }) => {
	const translationY = useSharedValue(400);
	const value: number = 400;

	const scrollHandler = useAnimatedScrollHandler((event) => {
		if (event.contentOffset.y <= 200) {
			translationY.value = value - event.contentOffset.y;
		}
	});

	const stylez = useAnimatedStyle(() => {
		return {
			height: translationY.value,
		};
	});
	return (
		<View style={styles.container}>
			<Animated.Image source={HeaderImage} style={[styles.box, stylez]} />
			<Animated.ScrollView onScroll={scrollHandler}>
				{children}
			</Animated.ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	box: {
		width: "100%",
		height: 400,
	},
});

export default AnimatedStickyHeader;
