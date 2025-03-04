import React from 'react';
import { Pressable,Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import {styles} from '../styles/PrincipleButtonStyles'; //Importamos los estilos

//Definimos las propiedades que recibira el boton
interface PrincipleButtonProps {
    onPress?: () => void;
    title: string;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export default function PrincipleButton({onPress, title, buttonStyle, textStyle,}:PrincipleButtonProps){
    return (
        <Pressable style = {[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}> {title}</Text>

        </Pressable>
    );
};
