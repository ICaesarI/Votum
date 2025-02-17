import React, { useState, useRef, useEffect} from "react"
import {View, Text, TouchableOpacity, ImageBackground, Animated} from "react-native"
import Timer from "./Timer";
import eventButtonStyles from "../styles/eventButtonStyles";
import SubEventButtonCard from "./SubEventButtonCard";
import subEvents from "../screens/HomeScreen/subEvents.json"


interface Props{
    title:string,
    date:string,
    status:string,
    backgroundImage:string
}

const images:Record<string,any>={
    retaFutbol: require("../../assets/images/retaFutbol.jpg"),
    bergamotaSquad: require("../../assets/images/bergamotaSquad.png"),
    tepatitlan: require("../../assets/images/tepatitlan.jpg"),
    veladaBox: require("../../assets/images/veladaBox.jpg"),
}

export default function EventButtonCard({title, date, status, backgroundImage}:Props){
  
    const [pressed, setPressed] = useState(false);
    const fadeAnimations = useRef(subEvents.sub_events.map(() => new Animated.Value(0))).current;

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
                onPress={() => setPressed(!pressed)} 
                >
                <ImageBackground
                    source={images[backgroundImage]}
                    style={{flex:1}}
                    imageStyle={eventButtonStyles.imageStyle}
                >
                    <View style={eventButtonStyles.topInfoContainer}>
                        <Text style={[eventButtonStyles.topInfo,{/*{backgroundColor: "orange"}*/}]}>{status}</Text>
                        <Text style={[eventButtonStyles.topInfo, {textAlign:"right"},{/*{backgroundColor: "green", textAlign: "right"}*/}]}>{date}</Text>
                    </View>

                    <View style={eventButtonStyles.middleInfoContainer}>
                        <Text style={eventButtonStyles.middleInfo}>{title}</Text>
                    </View>

                    <View style={eventButtonStyles.footerInfoContainer}>
                        <Timer seconds={180000}/>
                        {/*<Text style={styles.footerInfo}>180:20:13</Text>*/}
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            {/* Contenedor animado */}
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

