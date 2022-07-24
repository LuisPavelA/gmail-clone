import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import BottomBar from './components/BottomBar'
import Search from './components/Search'

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
      <StatusBar style="auto" />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#211f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
