import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons"
import { StyleSheet, View, Text, TextInput, Image } from 'react-native'


export default function Search() {
    
    const [text, onChangeText] = React.useState("");

    return (
        <View style={styles.container}>
            <Ionicons
                style={styles.menuIcon}
                name="menu"
                color="#c9c9c9"
                size={35}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search in emails"
                keyboardType="text"
                placeholderTextColor={'#c9c9c9'}
            />
            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={styles.userIcon} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#2b2b2b",
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 100,
        alignItems: "center"
    },    
    input: {
        color: "#c9c9c9",
        marginLeft: 20,
        fontSize: 20
    },
    menuIcon: {
        marginLeft: 15
    },
    userIcon: {
        position: "relative",
        right: -90,
        height: 35,
        width: 35,
        borderRadius: 25
    }
})