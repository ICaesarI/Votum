import React from 'react'
import {View} from 'react-native'
import ContentContainer from '../CategoriesScreen/ContentContainer';
import HeaderContainer from '../CategoriesScreen/HeaderContainer';
import InputComponent from '../../components/inputComponent';
import AppLogo from '../../components/AppLogo';

import globalStyles from '../../styles/globalStyles';
import contentContainerStyles from '../../styles/LoginScreen/contentContainerStyles';
import { TouchableOpacity, Text} from 'react-native';
import {StackActions, useNavigation} from "@react-navigation/native"
import {StackNavigationProp } from "@react-navigation/stack";
import {RootStackParamList} from "../../navigation/StackNavigator";

export default function LoginScreen(){
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
            </ContentContainer>
        </View>

    );
}