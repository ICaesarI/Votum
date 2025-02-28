import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import ContentContainer from '../../components/ContentContainer';
import HeaderContainer from '../../components/HeaderContainer';
import InputComponent from '../../components/inputComponent';
import AppLogo from '../../components/AppLogo';
import { useNavigation } from '@react-navigation/native';
import contentContainerStyles from '../../styles/LoginScreen/contentContainerStyles';
import globalStyles from '../../styles/globalStyles';

//Pantalla de inicio de sesión
export default function LoginScreen(){
    return(
        <View style={globalStyles.container}>
            <HeaderContainer>
                <AppLogo/>
            </HeaderContainer>

            <ContentContainer>
                <View style={contentContainerStyles.inputsContainer}>
                    <InputComponent placeholder='Usuario' icon='account' isShow={false}/>
                    <InputComponent placeholder='Contraseña' icon='lock' isShow={true}/>
                </View>
            <View style={{flex:0.5}}>
                <TouchableOpacity>
                    <Text>Iniciar Sesion</Text>
                </TouchableOpacity>
            </View>
            </ContentContainer>
        </View>

    );
}