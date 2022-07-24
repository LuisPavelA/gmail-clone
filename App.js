import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import BottomBar from './components/BottomBar'
import Search from './components/Search'
import Compose from './components/Compose'
// import Email from './components/Email'

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
      <StatusBar style="auto" />
      <Compose />
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
