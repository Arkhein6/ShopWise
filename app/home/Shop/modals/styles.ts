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

export {
    sortModal
}