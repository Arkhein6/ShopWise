import { StyleSheet } from "react-native";

const productCardGrid= StyleSheet.create({
    container:{
        width:155,

    },
    ratings:{
        flexDirection: 'row',
        gap:2,
        alignItems:'center'
    },
    pricerange:{
        flexDirection:'row',
        gap:5
    },
    discountprice:{
        textDecorationLine:'line-through',
        color:'gray'
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
        top:6,
        left:6,
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
        borderRadius:10
        
    },
    heart:{
        backgroundColor:'white',
        width:34,
        height:34,
        borderRadius:17,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:-15,
        right:3,
        zIndex:100
    }
})
const defaults= StyleSheet.create({
    
})
const productCardCategory= StyleSheet.create({
    container: {
        width:300,
        height:100,
        flexDirection:'row',
        borderRadius:10
    },
    imagerange:{
        width:'50%',
        height:'100%',
    },
    textrange:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    image:{
        width:'100%',
        height:'100%',
        borderTopRightRadius:10,
        borderBottomRightRadius:10

    }
})
const productCardBag = StyleSheet.create({
    
})
export {
    defaults,
    productCardGrid,
    productCardCategory,
    productCardBag
}