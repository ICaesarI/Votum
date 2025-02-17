import { StyleSheet } from "react-native"
const categoriesScreenStyles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignContent: "center",
    },
    
    categoryContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    }
})

export default categoriesScreenStyles;