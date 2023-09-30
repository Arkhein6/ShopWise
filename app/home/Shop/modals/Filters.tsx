import { View, Text, ScrollView,Pressable } from "react-native";
import React from "react";
import { filters as styles } from "./styles";

const Filters = () => {
    const colors: string[] = ["black","brown","green","blue","pink","red"]
    const sizes: string[] = ["XS","S","M","L","XL"]
    const mainCategories: string[] = ["All", "Women","Men","Boys","Women"]
	return (
		<View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View>
                    <Text>Colors</Text>
                    <ScrollView>
                        {
                            colors.map((current) => (
                                <Pressable>
                                    <View>

                                    </View>
                                </Pressable>
                            ))
                        }
                    </ScrollView>
                </View>
                <View>
                    <Text>Sizes</Text>
                    <View>
                        {
                            sizes.map((current) => (
                                <Pressable>
                                    <Text>{current}</Text>
                                </Pressable>
                            ))
                        }
                    </View>
                </View>
                <View>
                    <Text>
                        Category
                    </Text>
                    <View>
                        {
                            mainCategories.map((current) => (
                                <Pressable>
                                    <Text>{current}</Text>
                                </Pressable>
                            ))
                        }
                    </View>
                </View>
			</ScrollView>
            <View>
                <Pressable><Text>Discard</Text></Pressable>
                <Pressable><Text>Apply</Text></Pressable>
            </View>
		</View>
	);
};

export default Filters;
