import { StyleSheet } from "react-native";


const promoCodeCard = StyleSheet.create({
    modaloverlay: { 
        flex: 1,opacity:0.2,
        backgroundColor: "black", 

    },
	container: {
        backgroundColor:'#F5F5F5',
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
		paddingLeft: 20,
		paddingRight: 20,
		gap: 20,
        position:'absolute',
        width:'100%',
        bottom:0,
        zIndex:1000,
        opacity:1,
        paddingBottom:20,

	},
    title: {
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
	},
    promorange:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:15,
        paddingLeft:10,
        marginTop:30
        
    },
    promoicon:{
        height:40,
        width:40,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
})
const checkoutModal = StyleSheet.create({
    order:{
        backgroundColor:'red',
        borderRadius: 30,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:'100%'
    },
    paymentimage:{
        width:50,
        height:50,
        borderRadius:10
    },
    paymenttextrange:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    paymentimagerange:{
        flexDirection:'row',
        gap:20,
        alignItems:'center'
    },
    submititem:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    graytext:{
        color:'gray'
    },
    boldtext:{
        fontWeight:"bold"
    },
    deliveryrange:{
        gap:20
    },
    delivery:{
        width:100,
        height:70,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        
    },
    deliveryicon:{
        fontWeight:'bold',
        fontSize:20
    },
    checkoutrange:{
        justifyContent:'center',
        alignItems:'center',
        height:60,
        borderBottomWidth:0.5,
        borderBottomColor:'gray'
    },
    checkouticon:{
        position:'absolute',
        left:'5%',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
    },
    checkouttext:{
        fontWeight:'bold',
        fontSize:20,
    }

})

export {promoCodeCard,checkoutModal}