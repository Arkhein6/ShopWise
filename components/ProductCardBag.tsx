import { View, Text, ImageSourcePropType, Image } from "react-native";
import React,{useState} from "react";
import { AntDesign, Fontisto,Entypo } from "@expo/vector-icons";

type productProps = {
	imageUrl: ImageSourcePropType;
	ratings: number;
	subTitle: string;
	title: string;
	actualPrice: number;
	color: string;
	size: string;
};
const ProductCardBag = (props: productProps) => {
    const [orderUnits,setOrderUnits] = useState(1)
	return (
		<View>
			<View>
            <Image source={props.imageUrl} />
			</View>
			<View>
				<Text>{props.title}</Text>
				<View>
					<Text>Color:{props.color}</Text>
					<Text>Size:{props.size}</Text>
				</View>
				<View>
                    <View><AntDesign name="minus" size={24} color="black" /></View>
                    <Text>{orderUnits}</Text>
                    <View><AntDesign name="plus" size={24} color="black" /></View>
                </View>
                <View>
                <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
                <View>{props.actualPrice}</View>
			</View>
		</View>
	);
};

export default ProductCardBag;
