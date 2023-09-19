import { View, Text, ImageSourcePropType, Image } from "react-native";
import React,{useState} from "react";
import { AntDesign, Fontisto,Entypo } from "@expo/vector-icons";

type productProps = {
	imageUrl: ImageSourcePropType;
	title: string;
	actualPrice: number;
	color: string;
	size: string,
    units: number
};
const ProductCardOrder = (props: productProps) => {
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
                    <Text>{props.units}</Text>
                
                <View>{props.actualPrice}</View>
			</View>
		</View>
	);
};

export default ProductCardOrder;
