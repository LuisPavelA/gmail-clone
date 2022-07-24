import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import BottomBar from './components/BottomBar'
import Search from './components/Search'
import Compose from './components/Compose'
import Email from './components/Email'

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
      <StatusBar style="auto" />
      <View>
        <Email url={"https://placeimg.com/380/480/any"} name="Jane" day="24"/>
        <Email url={"https://placeimg.com/380/470/any"} name="Bob" day="22"/>
        <Email url={"https://placeimg.com/380/490/any"} name="Alex" day="21"/>
        <Email url={"https://placeimg.com/380/450/any"} name="Shanna" day="18"/>
        <Email url={"https://placeimg.com/380/487/any"} name="Bernardo" day="15"/>
        <Email url={"https://placeimg.com/380/450/any"} name="Eryn" day="15"/>
        <Email url={"https://placeimg.com/380/487/any"} name="Bernardo" day="14"/>
      </View>
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
    paddingTop: 60
  },
  emailBox: {
    alignItems: "center"
  }
});
