import { StyleSheet } from "react-native";


const bag = StyleSheet.create({
    checkoutrange:{
        gap:20
    },
    checkout:{
        backgroundColor:'red',
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center',
        height:50,

    },
    amountrange:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    graytext:{
        color:'gray'
    },
    amount:{
        fontWeight:'bold'
    },
    promorange:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        alignItems:'center',
        backgroundColor:'white'
        
    },
    promoicon:{
        height:30,
        width:30,
        backgroundColor:'red',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
    }

})


export {
    bag
}