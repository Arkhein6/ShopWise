import { StyleSheet } from "react-native";


const sortModal = StyleSheet.create({
    modaloverlay: { 
        flex: 1,opacity:0.2,
        backgroundColor: "black", 

    },
	container: {
		backgroundColor: "white",
		borderTopRightRadius: 40,
		borderTopLeftRadius: 40,
        position:'absolute',
        width:'100%',
        bottom:0,
        paddingBottom:20

	},
    title: {
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
        paddingTop:20
	},
    button:{
        height:50,
        justifyContent:'center',
        paddingLeft:'5%'

    },
    buttonPressed:{
        backgroundColor:'red'
    },
    buttontextpressed:{
        color:'white',
        fontWeight:'bold'
    }
})
const filters = StyleSheet.create({
    header:{
        position:'relative',
        alignItems:'center',
        height:60,
        justifyContent:'center',
        borderBottomColor:'gray',
        borderBottomWidth:0.5
    },
    headericon:{
        position:'absolute',
        left:'5%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    headertext:{
        fontWeight:'bold',
        fontSize:25
    },
    filtersrange:{
        gap:10,
    },
    title:{
        fontWeight:'bold',
        paddingLeft:'5%',

    },
    filterscontainers:{
        paddingTop:20,
        paddingBottom:20,
        backgroundColor:'white',
        paddingLeft:'5%',
        paddingRight:'5%'
    },
    
    colorrange:{
        flexDirection:'row',
        gap:10,
    },
    colorborder:{
        borderWidth:1,
        borderColor:'red',
        height:50,
        width:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    color:{
        height:40,
        width:40,
        borderRadius:20,
    },
    size:{
        height:40,
        width:40,
        borderRadius:10,
        borderWidth:1,
        borderColor:'gray',
        alignItems:'center',
        justifyContent:'center',
        
    },
    sizerange:{
        flexDirection:'row',
        gap:10
    },
    categoryrange:{
        flexDirection:'row',
        gap:15,
        flexWrap:'wrap'
    },
    category:{
        height:40,
        width:105,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        borderWidth:1,
        borderColor:'gray'
    },
    brandrange:{
        gap:20
    },
    brand: {
        justifyContent:'space-between',
        flexDirection:'row'
    },
    brandcheckbox:{
        height:20,
        width:20,
        borderRadius:5,
        borderWidth:1,
        borderColor:'gray'
    },
    confirmrange:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingTop:20,
        paddingBottom:20,
        borderTopColor:'gray',
        borderTopWidth:0.5
    },
    confirm:{
        width:'45%',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        borderRadius:20
    },
    discardconfirm:{
        borderWidth:1,
        borderColor:'black',
    },
    applyconfirm:{
        backgroundColor:'red'
    }

})

export {
    sortModal,
    filters
}