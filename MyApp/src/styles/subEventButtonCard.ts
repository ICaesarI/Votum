import {Dimensions, StyleSheet} from "react-native"

const {width} = Dimensions.get("window")
const subEventButtonCardStyles = StyleSheet.create({
    container:{
        width: width * 0.95,
        minHeight:width * 0.3,
    },

    imageStyle:{
        opacity:0.6,
        borderRadius: 20
    },

    eventButtonContainer:{
        flex:1,
    },

    lastEventButtonContainer:{
        flex:1,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },

    topInfoContainer:{
        flex:1,
        color: "#FFFFFF",
    },

    topInfo:{
        flex:1,
        padding: 10,
        color: "#FFFFFF",
    },

    footerInfoContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        //backgroundColor: "purple",
        //overflow: "hidden"
    },

    footerInfo:{
        color: "#FFFFFF"
    },

    date:{
        marginTop: width * 0.01,
        paddingRight: width * 0.03
    },

    title:{
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: width * 0.03
    }
})

export default subEventButtonCardStyles;