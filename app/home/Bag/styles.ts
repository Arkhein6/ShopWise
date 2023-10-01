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
        marginBottom:20

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
        backgroundColor:'white',
        borderRadius:15,
        paddingLeft:10
        
    },
    promoicon:{
        height:40,
        width:40,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    ordercheckoutrange:{
        gap:20
    }

})

const checkout = StyleSheet.create({

})
export {
    bag,
    checkout
}   