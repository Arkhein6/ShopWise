import { StyleSheet } from "react-native";

const productCardGrid= StyleSheet.create({
    container:{
        backgroundColor:'brown',
        height:265,
        width:155

    },
    ratings:{
        flexDirection: 'row',
        backgroundColor:'red',
        gap:2,
        alignItems:'center'
    },
    pricerange:{
        backgroundColor:'blue',
        flexDirection:'row',
        gap:5
    },
    discountprice:{
        textDecorationLine:'line-through'
    },
    subtitle:{
        color:'gray',

    },
    title:{
        fontWeight:'bold',
        fontSize:20
    },
    imagerange:{
        position:'relative',
        
    },
    imageoverlay:{
        position:'absolute',
        flexDirection:'row',
        top:10,
        left:10,
        gap:5,
        alignItems:'center',
        justifyContent:'center'

    },
    discountoverlay:{
        width:42,
        height:25,
        backgroundColor:'red',
        fontSize:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
        

    },
    newtextoverlay:{
        width:45,
        height:30,
        backgroundColor:'black',
        color:'white',
        fontSize:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
        
    }
    ,
    image:{
        width:'100%',
        height:185,
        resizeMode:'cover',
        borderRadius:12
        
    },
    heart:{
        backgroundColor:'blue',
        width:36,
        height:36,
        borderRadius:18,
        alignItems:'center',
        justifyContent:'center'
    }
})
const defaults= StyleSheet.create({
    
})
export {
    defaults,
    productCardGrid
}