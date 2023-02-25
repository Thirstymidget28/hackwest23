import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Flex = () => {
  return (
    <View style={[styles.container, {flexDirection: 'column'},]}>
        <View style= {{flex: 1, backgroundColor: 'red'}} />
        <View style= {{flex: 2, backgroundColor: 'red'}} />
        <View style= {{flex: 3, backgroundColor: 'red'}} />

    </View>
  );
}

/*
export default function App() {
  return (
    <View style={[styles.container, {flexDirection: 'column'},]}>
        <View style= {{flex: 1, backgroundColor: 'red'}} />
        <View style= {{flex: 2, backgroundColor: 'red'}} />
        <View style= {{flex: 3, backgroundColor: 'red'}} />

    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Flex;
