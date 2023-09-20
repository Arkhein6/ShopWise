import { View,StyleSheet,Text } from 'react-native';
import AnimatedStickyHeader from '../../components/AnimatedStickyHeader';
import ProductCardGrid from '../../components/ProductCardGrid';
import image from '../../assets/images/pexels8.jpg'

function Home() {

  return (
    <AnimatedStickyHeader>
      <ProductCardGrid title='Evening Dress' subTitle='Dorothy Markins' isNew={true} discountRate={21} ratings={4.5} actualPrice={12} imageUrl={image} />
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