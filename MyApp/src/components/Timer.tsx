import React from "react"
import {View, Text, StyleSheet} from "react-native"
import CountDown from "react-native-countdown-component"

interface Props{
    seconds:number
}

export default function Timer({seconds}:Props){
    return(
        <CountDown
            until={seconds}
            onFinish={() => alert('finished')}
            size={20}
            digitStyle={styles.digitStyle}
            digitTxtStyle={{color:"#FFFFFF"}}
            timeLabelStyle={{color:"#FFFFFF"}}
            timeLabels={{ d: "", h: "", m: "", s: "" }} // Esto elimina las etiqueta
      />
    )
}

const styles = StyleSheet.create({
    digitStyle:{
        backgroundColor: "none",
        margin: 0
        
    }
})