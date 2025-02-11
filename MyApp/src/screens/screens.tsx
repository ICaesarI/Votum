import React from "react";
import {View, Text, StyleSheet} from "react-native";

export default function Screens(){
    return (
        <View style={styles.container}>
            <Text>Screens Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center"
    }
})