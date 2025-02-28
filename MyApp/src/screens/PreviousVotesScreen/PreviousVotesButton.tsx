import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground} from "react-native";

interface Props{
    name:string,
    category:string
}

const images:Record<string, any>={
    masImbecil: require("../../../assets/images/patricioEstrella.png"),
    idiotezAnio: require("../../../assets/images/idiotezAnio.png"),
    videoAnio: require("../../../assets/images/videoAnio.png"),
    masNalgon: require("../../../assets/images/gary.png"),
}

const {width} = Dimensions.get("window");
export default function PreviousVotesButton({name, category}:Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={[
                    styles.previousVotesButton,
                    {backgroundColor: "#313030"} 
                ]}
            >
                    <ImageBackground
                        source={images[category]}
                        style={{flex:1}}
                        imageStyle={styles.imageStyle}
                    >
                        <View style={styles.previousVotesButtonContainer}>
                            <Text style={styles.previousVotesButtonText}>{name}</Text>
                        </View>
                    </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width * 0.4,
        height: width * 0.4,
        margin: width * 0.04
    },
    
    previousVotesButton:{
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: 20,
    },

    previousVotesButtonContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    
    previousVotesButtonText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    },
    
    imageStyle:{
        opacity:0.6,
        borderRadius: 20
    }
})