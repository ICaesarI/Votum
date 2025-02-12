import {StyleSheet} from "react-native"
const inputComponentStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: "7%",
      marginBottom: "7%",
    },
    
      input:{
        flex:1,
        borderColor: "#307A59",
        borderWidth: 1,
        borderRadius: 15,
        paddingLeft: "15%",
        paddingRight: "10%",
        height: 40,
      },
    
      iconContainer:{
        position: "absolute",
        paddingLeft: "2%",
      },
      
      iconContainerEyeIcon:{
        right: 0,
        paddingRight: "2%"
      }
});

export default inputComponentStyles;