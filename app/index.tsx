import {View,Text,Pressable} from 'react-native'
import { Link } from 'expo-router'


const index = () => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        rowGap: 20
    }}>
        <Link href={"/account/SignUp"} style={{
            backgroundColor:'yellow',
            padding:10,
        }}><Text>Go to Sign Up Page</Text></Link>
        <Link href={"/account/Login"} style={{
            backgroundColor:'yellow',
            padding:10,
        }}><Text>Go to Login Page</Text></Link>
    </View>
  )
}

export default index
