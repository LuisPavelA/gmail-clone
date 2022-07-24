import { StyleSheet, View, Text } from 'react-native'

export default function Email() {
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