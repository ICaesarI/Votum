import React from "react";
import {View, StyleSheet} from "react-native"

interface Props{
    children:React.ReactNode;
    style?: object,
}

export default function ContentContainer({children, style}:Props){
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:3,
        alignItems: "center",
        justifyContent: "center",
    }
})