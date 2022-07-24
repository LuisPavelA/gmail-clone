import { StyleSheet, View, Text } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

export default function Promotion() {
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                    <AntDesign 
                        name="tago"
                        color="#62d84e"
                        size={30}
                        style={styles.promotion}
                    />
                <View style={styles.information}>
                    <Text style={styles.name}>
                        Promotions
                    </Text>
                    <Text style={styles.description}>
                        Company 1, Company 2...
                    </Text>
                </View>
                <View style={styles.otherInformation}>
                    <Text style={styles.text}>
                        7 new
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginVertical: 10,
        justifyContent: "center"
    },
    name: {
        fontSize: 17,
        color: "#fff"
    },
    description: {
        fontSize: 15,
        color: "#fff"
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    information: {
        marginLeft: 40
    },
    otherInformation: {
        marginLeft: 70,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#59af77",
        borderRadius: 20
    },
    text: {
        color: "white",
        margin: 4
    }
})