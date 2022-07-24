import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { StyleSheet, View, Text } from 'react-native'


export default function Compose() {
    return (
        <View style={styles.container}>
            <FontAwesome5
                style={styles.menuIcon}
                name="pen"
                color="#c9c9c9"
                size={25}
            />
            <Text style={styles.text}>
                Compose
            </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        backgroundColor: "#1a4566",
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        bottom: 100,
        right: 20,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10
    },
    text: {
        fontSize: 20,
        color: "#c9c9c9",
        marginLeft: 10
    }
})