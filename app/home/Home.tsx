import { View,StyleSheet,Text } from 'react-native';
import AnimatedStickyHeader from '../../components/AnimatedStickyHeader';

function Home() {

  return (
    <AnimatedStickyHeader>
      <Text>asias'gsd</Text>
    </AnimatedStickyHeader>
    
  );
}
const styles = StyleSheet.create({
  container:{
  flex:1,
},
box:{
  width:'100%',
  height:400,
},
scroll:{
  backgroundColor:'red'
},})
export default Home