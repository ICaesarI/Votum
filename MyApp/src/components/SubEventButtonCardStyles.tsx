import React, { useState } from "react"
import {View, Text, TouchableOpacity, ImageBackground} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {StackNavigationProp } from "@react-navigation/stack";
import {RootStackParamList} from "../navigation/StackNavigator"
import subEventButtonCardStyles from "../styles/subEventButtonCard"

//Componente con para los subEventos de cada votación

interface Props{
    backgroundName:string,
    isLast:Boolean
}

//Obtener la ruta de las imagenes segun el nombre obtenido en el json
const images:Record<string,any> ={
    Nominaciones: require("../../assets/images/awardsBackground.png"),
    VotacionesPrevias:  require("../../assets/images/votacionesPrevias.png"),
    BergamotaFest:  require("../../assets/images/gala.png"),
}


export default function SubEventButtonCard({backgroundName, isLast}:Props){
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();//Hook para la navegación
    const [pressed, setPressed] = useState(false);//Botón para identicar si fue presionado
    return(
        <View style={subEventButtonCardStyles.container}>
            <TouchableOpacity 
                activeOpacity={0.4}
                style={[
                    isLast ? subEventButtonCardStyles.lastEventButtonContainer : subEventButtonCardStyles.eventButtonContainer,
                    pressed ? {backgroundColor:"#2B6E52"} : {backgroundColor: "#000000"}
                ]} 
                onPress={() => navigation.navigate("Categories")}//Al ser presionado se navega a otra pantalla
                >
                <ImageBackground
                    source={images[backgroundName]}//Apartir del nombre se busca la url
                    style={{flex:1}}
                    imageStyle={subEventButtonCardStyles.imageStyle}
                >
                    <View style={subEventButtonCardStyles.topInfoContainer}>{/*Info situada arriba de la subCarta*/}
                        <Text style={[subEventButtonCardStyles.topInfo,{/*{backgroundColor: "orange"}*/}]}>Programado</Text>
                    </View>
                    <View style={subEventButtonCardStyles.footerInfoContainer}>{/*Info situada abajo de la SubCarta*/}
                        <Text style={[subEventButtonCardStyles.footerInfo, subEventButtonCardStyles.title]}>{backgroundName}</Text>
                        <Text style={[subEventButtonCardStyles.footerInfo, subEventButtonCardStyles.date]}>Fecha: 30/05/2024</Text>
                    </View>
                    
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

