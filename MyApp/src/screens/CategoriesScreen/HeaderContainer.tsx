import React from "react";
import {View, StyleSheet} from "react-native"

interface Props{
    children:React.ReactNode;
    styleI?: object,
}

export default function HeaderContainerPrueba({children, styleI}:Props){
    return(
        <View style={[styles.container, styleI]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})