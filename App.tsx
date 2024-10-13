import React, { useState } from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

function App(): React.JSX.Element {
    const [bgColor, setBgColor] = useState("#000000")

    const generateColor = () => {
        const hexRange = "0123456789ABCDEF"

        let color = "#"

        for(let i = 0;i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)]
        }
        setBgColor(color)
    }

    return (
        <>
        <StatusBar backgroundColor={"#000000"} />
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <TouchableOpacity onPress={generateColor}>
                <View style={styles.actionBtn}>
                    <Text style={styles.actionBtnText}>Press Me!</Text>
                </View>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: "#6A1B4D",
        paddingVertical: 6,
        paddingHorizontal: 20
    },
    actionBtnText: {
        fontSize: 24,
        color: "#FFF",
        textTransform: "uppercase"
    }
});

export default App;