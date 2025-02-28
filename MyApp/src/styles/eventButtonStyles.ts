import {StyleSheet , Dimensions} from "react-native"

const {width} = Dimensions.get("window")
const eventButtonStyles = StyleSheet.create({
    container:{
        //flex:1,
        width: width * 0.95,
        minHeight:width * 0.5,
        margin:10        
    },

    imageStyle:{
        opacity:0.6,
        borderRadius: 20
    },

    eventButtonContainer:{
        width: width * 0.95,
        height:width * 0.5,
        borderRadius: 20,
    },

    eventPressedButtonContainer:{
        width: width * 0.95,
        height:width * 0.5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    topInfoContainer:{
        flex:1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between",
        color: "#FFFFFF",
    },

    topInfo:{
        flex:1,
        padding: 10,
        color: "#FFFFFF",
    },

    middleInfoContainer:{
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "skyblue"
    },

    middleInfo:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFFFFF"
    },

    footerInfoContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "purple",
        //overflow: "hidden"
    },

    footerInfo:{
        fontSize: 20,
        color: "#FFFFFF"
    },

    title:{
        justifyContent: "center",
        alignItems: "center"
    }
})

export default eventButtonStyles