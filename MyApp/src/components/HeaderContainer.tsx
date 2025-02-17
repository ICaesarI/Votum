import React from "react";
import {View, StyleSheet} from "react-native"

interface Props{
    children:React.ReactNode;
    styleI?: object,
}

//Contenedor header para las pantallas
//children: Recibe codigo (hijo) lo cual se renderiza en este contenedor (padre)
export default function HeaderContainer({children, styleI}:Props){
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