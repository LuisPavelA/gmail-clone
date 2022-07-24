
import Icon from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import { StyleSheet, View, Text } from 'react-native'

export default function BottomBar() {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon
                    style={styles.selectedIcon}
                    name="mail"
                    color="#c9c9c9"
                    size={35}
                />
                <Text style={styles.text}>
                    Mail
                </Text>
            </View>
            <View style={styles.icon}>
                <FontAwesome
                    name="video"
                    color="#c9c9c9"
                    size={35}
                />
                <Text style={styles.text}>
                    Meet
                </Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#2b2b2b",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: "center"
    },
    text: {
        color: "#c9c9c9",
        fontWeight: "600",
        fontSize: 20
    },
    icon: {
        alignItems: "center",
        marginHorizontal: "auto"
    },
    selectedIcon: {
        backgroundColor: "#1a4566",
        paddingHorizontal: 15,
        borderRadius: 10,
        fontWeight: "900"
    }
})