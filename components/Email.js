import { StyleSheet, View, Text, Image } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"

export default function Email({ url, day, name }) {
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Image source={{uri: url}} style={styles.image}/>
                <View style={styles.information}>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet.
                    </Text>
                </View>
                <View style={styles.otherInformation}>
                    <Text style={styles.date}>
                        {day} Jul
                    </Text>
                    <AntDesign 
                        name="staro"
                        color="#c9c9c9"
                        size={20}
                        style={styles.star}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginVertical: 20
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 125
    },
    name: {
        fontSize: 20,
        color: "#fff"
    },
    date: {
        fontSize: 10,
        color: "#fff"
    },
    description: {
        fontSize: 15,
        color: "#fff"
    },
    flex: {
        display: "flex",
        flexDirection: "row",
    },
    information: {
        marginLeft: 40
    },
    star: {
        marginTop: 20
    },
    otherInformation: {
        marginLeft: 40,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
})