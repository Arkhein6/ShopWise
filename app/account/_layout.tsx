import { Stack } from "expo-router";
import { SafeAreaProvider} from "react-native-safe-area-context";


const AccountLayout = () => {
    return (
        <SafeAreaProvider>
            <Stack screenOptions={{
                headerTitle:"",
                headerStyle:{
                    backgroundColor:'#F5F5F5'
                }
                
            }} />
        </SafeAreaProvider>

    )
}
export default AccountLayout