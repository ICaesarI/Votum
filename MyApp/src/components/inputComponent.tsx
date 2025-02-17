import React, { useState } from 'react'
import {View, TextInput, TouchableOpacity} from  'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import inputStyles from '../styles/inputComponentStyles';

/*Componente de inputs el cual permite añadir un placeholder
  Parametros:
    placeholder: Cadena de texto para definir el placeholder
    isShow: Bandera (true / false) para añadir el icono del ojo y la logica de un input para una contraseña
    icon: Nombre del icono a añadir segun la libreria de @expo/vector-icons/MaterialCommunityIcons
  */
interface Props{
  placeholder:string
  icon:keyof typeof MaterialCommunityIcons.glyphMap
  isShow:Boolean
}

export default function InputComponent({placeholder, icon, isShow}:Props){
  const [showPassword, setShowPassword] = useState(true);//Bandera para mostrar o no una contraseña
  const [textInput, setTextInput] = useState("");//Hook para guardar lo que el usuario escriba

  const handleInputText = (text:string) => {//Logica para guardar lo que el usuario escribe
    setTextInput(text);
    console.log(textInput);
  }

  return (
    <View style={inputStyles.container}>
        <View style={inputStyles.iconContainer}>
          <MaterialCommunityIcons name={icon} size={24} color="#307A59" />
        </View>
        <TextInput style={inputStyles.input}
          placeholder={placeholder}
          secureTextEntry={isShow ? showPassword : false}
          placeholderTextColor="rgba(48, 122, 89, 0.5)"
          onChangeText={handleInputText} //Al cambiar el texto de manda a llamar la función
        />
        {isShow && (//Añadir el ojo en caso dependiedno de la bandera
          <View style={[inputStyles.iconContainer,inputStyles.iconContainerEyeIcon]}>
            <TouchableOpacity onPress={() => setShowPassword(showPassword ? false : true)}>
              <MaterialCommunityIcons name={showPassword ? "eye-outline" : "eye-off"} size={24} color="#307A59" />
            </TouchableOpacity>
          </View>
        )}
        
    </View>
  );
}