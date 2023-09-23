import {StyleSheet} from 'react-native'


const profileStyles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    maintitle:{
        fontSize:30,
        fontWeight:'bold'
    },
    inner:{
        width:'90%',
        gap:10
    },
    listitem:{
        position:'relative',
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10

    },
    title:{
        fontWeight:'bold',
        fontSize:18

    },
    subtitle:{
        color:'gray'

    },
    icon:{
        position:'absolute',
        right:0,

    },
    imagerange:{
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    }
    
})


export {
    profileStyles
}