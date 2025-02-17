import React, { useState, useRef, useEffect} from "react"
import {View, Text, TouchableOpacity, ImageBackground, Animated} from "react-native"
import Timer from "./Timer";
import eventButtonStyles from "../styles/eventButtonStyles";
import SubEventButtonCard from "./SubEventButtonCardStyles";
import subEvents from "../screens/HomeScreen/subEvents.json" //Json con los subEventos de las votaciones

//Carta que mostrara las votaciones activa

interface Props{
    title:string,
    date:string,
    status:string,
    backgroundImage:string
}

//Obtener la ruta de las imagenes segun el nombre obtenido en el json
const images:Record<string,any>={
    retaFutbol: require("../../assets/images/retaFutbol.jpg"),
    bergamotaSquad: require("../../assets/images/bergamotaSquad.png"),
    tepatitlan: require("../../assets/images/tepatitlan.jpg"),
    veladaBox: require("../../assets/images/veladaBox.jpg"),
}

export default function EventButtonCard({title, date, status, backgroundImage}:Props){
    const [pressed, setPressed] = useState(false);//Bandera para identificar si se presiono.
    const fadeAnimations = useRef(subEvents.sub_events.map(() => new Animated.Value(0))).current;//Animaciones al ser presionado

    useEffect(() => {
        if (pressed) {
            fadeAnimations.forEach((anim, index) => {
                Animated.timing(anim, {
                    toValue: 1,
                    duration: 300, // Duración de cada animación
                    delay: index * 100, // Cascada: Cada subevento se muestra 100ms después del anterior
                    useNativeDriver: true,
                }).start();
            });
        } else {
            fadeAnimations.forEach((anim) => {
                Animated.timing(anim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            });
        }
    }, [pressed]);

    return(
        <View style={[eventButtonStyles.container]} >
            <TouchableOpacity 
                activeOpacity={0.4}
                style={[
                    pressed ? eventButtonStyles.eventPressedButtonContainer : eventButtonStyles.eventButtonContainer,
                    pressed ? {backgroundColor:"#2B6E52"} : {backgroundColor: "#313030"},
                ]}
                onPress={() => setPressed(!pressed)}//Al ser presionado se manda a llamar
                >
                <ImageBackground
                    source={images[backgroundImage]}//Apartir del nombre se busca la url
                    style={{flex:1}}
                    imageStyle={eventButtonStyles.imageStyle}
                >
                    <View style={eventButtonStyles.topInfoContainer}>{/*Info situada hasta arriba de la carta*/}
                        <Text style={[eventButtonStyles.topInfo,{/*{backgroundColor: "orange"}*/}]}>{status}</Text>
                        <Text style={[eventButtonStyles.topInfo, {textAlign:"right"},{/*{backgroundColor: "green", textAlign: "right"}*/}]}>{date}</Text>
                    </View>

                    <View style={eventButtonStyles.middleInfoContainer}>{/*Info situada a la mitad de la carta*/}
                        <Text style={eventButtonStyles.middleInfo}>{title}</Text>
                    </View>

                    <View style={eventButtonStyles.footerInfoContainer}>{/*Info situada hasta abajo de la carta*/}
                        <Timer seconds={180000}/>{/*Contador*/}
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            {/* Contenedor animado. Al ser presionado se mapea la informacion en otro componente */}
            {pressed && subEvents.sub_events.map((subEvent, index) => (
                <Animated.View key={subEvent.id} style={{ opacity: fadeAnimations[index] }}>
                    <SubEventButtonCard 
                        backgroundName={subEvent.background_name}
                        isLast={index === subEvents.sub_events.length - 1}
                    />
                </Animated.View>
            ))}
        </View>
    )
}

