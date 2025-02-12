import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get("window");

const appLogoStyles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: width * 0.02,
    },

    logoContainer:{
        flexDirection: "row"
    },

    iconImage:{
        width: width * 0.17,
        height: width * 0.10,
        aspectRatio: 1,
    },
    
    iconText:{
        fontSize: width * 0.12,
        fontWeight: "bold",
    }
})

export default appLogoStyles;