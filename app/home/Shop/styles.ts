import { StyleSheet } from "react-native";

const shopCategories = StyleSheet.create({
    maintitle:{
        fontSize:40,
        fontWeight:'bold'
    },
    shopcategories:{
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10
    },
    shopcategoriescontainer:{
        gap:10
    },
    shopcurrentcategory:{
        backgroundColor:'black',
    }
})

export {
    shopCategories
}