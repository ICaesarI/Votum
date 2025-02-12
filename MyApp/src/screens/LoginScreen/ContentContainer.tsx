import React from 'react'
import {View} from 'react-native'
import InputComponent from '../../components/inputComponent';
import contentContainerStyles from '../../styles/LoginScreen/contentContainerStyles';

export default function ContentContainer(){
    return(
        <View style={contentContainerStyles.container}>
            <View style={contentContainerStyles.inputsContainer}>
                <InputComponent placeholder='Usuario' icon='account' isShow={false}/>
                <InputComponent placeholder='Contraseña' icon='lock' isShow={true}/>
            </View>
        </View>

    );
}