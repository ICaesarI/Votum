import React, { useState } from 'react'
import {View, TextInput, TouchableOpacity} from  'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import inputStyles from '../styles/inputComponentStyles';

interface Props{
  placeholder:string
  icon:keyof typeof MaterialCommunityIcons.glyphMap
  isShow:Boolean
}

export default function InputComponent({placeholder, icon, isShow}:Props){
  const [showPassword, setShowPassword] = useState(true);
  const [user, setUser] = useState("");

  const handleUserText = (text:string) => {
    setUser(text);
    console.log(user);
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
          onChangeText={handleUserText}
        />
        {isShow && (
          <View style={[inputStyles.iconContainer,inputStyles.iconContainerEyeIcon]}>
            <TouchableOpacity onPress={() => setShowPassword(showPassword ? false : true)}>
              <MaterialCommunityIcons name={showPassword ? "eye-outline" : "eye-off"} size={24} color="#307A59" />
            </TouchableOpacity>
          </View>
        )}
        
    </View>
  );
}