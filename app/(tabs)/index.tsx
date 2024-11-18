import {Image, StyleSheet, Platform, Button, Text} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import {useDispatch, useSelector} from "react-redux";
import {type RootState} from "@/src/store/store";

import {increment} from "@/src/store/counterSlice";

export default function HomeScreen() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Button title="Increment" onPress={() => dispatch(increment())}/>

        <Text>count {count}</Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
