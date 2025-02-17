import React from "react";
import {View, StyleSheet} from "react-native"

interface Props{
    children:React.ReactNode;
    style?: object,
}

//Contenedor de contenido para las pantallas
//children: Recibe codigo (hijo) lo cual se renderiza en este contenedor (padre)
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