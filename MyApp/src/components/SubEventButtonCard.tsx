import React, { useState } from "react"
import {View, Text, TouchableOpacity, ImageBackground} from "react-native"
import subEventButtonCard from "../styles/subEventButtonCard"
import {useNavigation} from "@react-navigation/native"
import {StackNavigationProp } from "@react-navigation/stack";
import {RootStackParamList} from "../navigation/StackNavigator"

interface Props{
    backgroundName:string,
    isLast:Boolean
}

const images:Record<string,any> ={
    Nominaciones: require("../../assets/images/awardsBackground.png"),
    VotacionesPrevias:  require("../../assets/images/votacionesPrevias.png"),
    BergamotaFest:  require("../../assets/images/gala.png"),
}


export default function SubEventButtonCard({backgroundName, isLast}:Props){
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [pressed, setPressed] = useState(false);
    return(
        <View style={subEventButtonCard.container}>
            <TouchableOpacity 
                activeOpacity={0.4}
                style={[
                    isLast ? subEventButtonCard.lastEventButtonContainer : subEventButtonCard.eventButtonContainer,
                    pressed ? {backgroundColor:"#2B6E52"} : {backgroundColor: "#000000"}
                ]} 
                onPress={() => navigation.navigate("Categories")}
                >
                <ImageBackground
                    source={images[backgroundName]}
                    style={{flex:1}}
                    imageStyle={subEventButtonCard.imageStyle}
                >
                    <View style={subEventButtonCard.topInfoContainer}>
                        <Text style={[subEventButtonCard.topInfo,{/*{backgroundColor: "orange"}*/}]}>Programado</Text>
                    </View>
                    <View style={subEventButtonCard.footerInfoContainer}>
                        <Text style={[subEventButtonCard.footerInfo, subEventButtonCard.title]}>{backgroundName}</Text>
                        <Text style={[subEventButtonCard.footerInfo, subEventButtonCard.date]}>Fecha: 30/05/2024</Text>
                    </View>
                    
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

