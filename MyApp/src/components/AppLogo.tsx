import React from 'react'
import {View, Text, Image} from 'react-native'
import appLogoStyles from '../styles/appLogoStyles';

//Logo que se usara en Login y Home
export default function AppLogo(){
    return(
        <View style={appLogoStyles.container}>
            <View style={appLogoStyles.logoContainer}>
                <Image style={appLogoStyles.iconImage} source={require("../../assets/images/bergamotaIcon.png")}/>
                <Text style={appLogoStyles.iconText}>BERGAMOTA</Text>
            </View>
        </View>

    );
}