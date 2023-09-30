import { StyleSheet } from "react-native";

const shopCategories = StyleSheet.create({
    maintitle:{
        fontSize:40,
        fontWeight:'bold',
        paddingLeft:'5%'
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
        backgroundColor:'red',
    },
    allcategoriesbutton:{
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        borderColor:'red',
        borderWidth:2

    }
})
const categories = StyleSheet.create({container:{
    width:'90%',
    alignSelf:'center',
    gap:20,
    height: '88%'

},
    datacategoryrange:{
        flexDirection:'row',
        gap: 10,
        backgroundColor:'white'
        
    },
    datacategory:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    currentdatacategoryrange:{
        borderBottomWidth:3,
        fontWeight:'bold',
        borderBottomColor:'red'
    },
    promorange:{
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        height:100,
        borderRadius:15
    },
    promosubtitle:{
        color:'white'
    },
    promotitle:{
        fontWeight:'bold',
        color:'white',
        fontSize:25
    },
    scrollcategoryrange:{
        gap:20,
    }


})
export {
    shopCategories,
    categories
}