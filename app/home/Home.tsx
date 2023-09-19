import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { View,StyleSheet,Text } from 'react-native';
import HeaderImage from '../../assets/images/pexels8.jpg'

function Home() {
  const translationY = useSharedValue(400);
  const value: number = 400

  const scrollHandler = useAnimatedScrollHandler((event) => {
    if(event.contentOffset.y <= 200){
      translationY.value = value - event.contentOffset.y
    }
  });

  const stylez = useAnimatedStyle(() => {
    return {
      height:translationY.value
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image source={HeaderImage} style={[styles.box, stylez]} />
      <Animated.ScrollView style={styles.scroll} onScroll={scrollHandler}>
        {
          new Array(15).fill(0).map((curr,idx) => (
            <Text key={idx} style={{
              padding:10,
              backgroundColor:'green',
              height:100
            }}>{curr}</Text>
          ))
        }
      </Animated.ScrollView>
    </View>
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
},
}
)
export default Home