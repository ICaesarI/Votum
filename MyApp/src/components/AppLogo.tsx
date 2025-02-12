import React from 'react'
import {View, Text, Image, Dimensions} from 'react-native'
import appLogoStyles from '../styles/appLogoStyles';

const {width} = Dimensions.get("window");
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