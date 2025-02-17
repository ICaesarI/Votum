import {StyleSheet, Dimensions} from "react-native"

const {width} = Dimensions.get("window")
const categoryButtonStyles = StyleSheet.create({
    container:{
        margin: width * 0.01,
        width: width * 0.3,
        paddingHorizontal: width * 0.01,
        paddingVertical: width * 0.02,
    },

    category:{
        color:"#307A59",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    
    selectedCategory:{
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 10,
        color:"#307A59",
        textAlign: "center",
        backgroundColor:"rgba(48, 122, 89, 0.3)",
    }
})

export default categoryButtonStyles;