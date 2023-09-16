import { StyleSheet } from "react-native";

const SignUpStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:40,
        textAlign:'center',
        marginBottom:60
    },
    inner:{
        width:'90%',
    },
    textInput:{
        backgroundColor:'white',
        flexDirection:'row',
        height:60,
        alignItems:'center',
        position:'relative',
        paddingLeft:10,
        elevation:2
    },
    textInputs:{
        rowGap:15
    },
    inputConfirm:{
        position:'absolute',
        right:10,
    },
    signInCheck:{
        alignSelf:'flex-end',
        flexDirection:'row',
        alignItems:'center',
        columnGap:5,
        marginBottom:20
    },
    button:{
        backgroundColor:'red',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
    },
    links:{
        alignItems:'center',
        justifyContent:'center',
        rowGap:10,
        position:'absolute',
        bottom:0,
        width:'100%'
    },
    socialLinks:{
        flexDirection:'row',
        columnGap:10,
    },
    link:{
        backgroundColor:'white',
        height:60,
        width:80,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        elevation:1,

    }

})
const ForgotPasswordStyles = StyleSheet.create({})
const LoginStyles = StyleSheet.create({})



export {
    SignUpStyles,
    ForgotPasswordStyles,
    LoginStyles
}