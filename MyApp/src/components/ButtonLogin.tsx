import React from 'react';
import { Pressable,Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import {styles} from '../styles/ButtonLogin'; //Importamos los estilos

//Definimos las propiedades que recibira el boton
interface LoginButtonProps {
    onPress: () => void;
    title: string;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const LoginButton: React.FC<LoginButtonProps> = ({onPress, title, buttonStyle, textStyle,}) => {
    return (
        <Pressable style = {[styles.button, buttonStyle]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyle]}> {title}</Text>

        </Pressable>
    );
};

export default LoginButton;