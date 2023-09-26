import { StyleSheet } from "react-native";

const orders = StyleSheet.create({
    maintitle:{
        fontSize:40,
        fontWeight:'bold'
    },
    filters:{
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10
    },
    filtercontainer:{
        gap:10
    },
    currentfilter:{
        backgroundColor:'black',
    }
})

export {
    orders
}