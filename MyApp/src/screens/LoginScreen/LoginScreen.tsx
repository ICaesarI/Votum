import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ContentContainer from './ContentContainer';
import HeaderContainer from './HeaderContainer';

export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <HeaderContainer/>
            <ContentContainer/>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})