import React from 'react'
import {View} from 'react-native'
import AppLogo from '../../components/AppLogo';
import headerContainerStyles from '../../styles/LoginScreen/headerContainerStyles';

export default function HeaderContainer(){
    return(
        <View style={headerContainerStyles.container}>
            <AppLogo/>
        </View>

    );
}