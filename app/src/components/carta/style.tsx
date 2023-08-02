import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#323232",
        borderRadius: 8,
        height: "15%",
        margin: 10,
    },

    imagem:{
        height: 30,
        width: 30,
        borderRadius: 9999,
    },

    text:{
        fontFamily: "Arial",
        fontSize: 16,
        color: "#d9d9d9",
    },

    container_div:{
        flex: 1,
        flexDirection: "row",
    }, 
    
    container_img:{
        width: "15%",
        justifyContent: "center",
        alignItems: "center"
    },

    container_text:{
        width: "85%",
        flex:1,
        flexDirection: "column"
    },

    sockt: {
        height: "50%",
        justifyContent: "center",
    }


})
export default styles