import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    container:{
        backgroundColor: "#323232",
        borderRadius: 8,
        height: 60,
        margin: 10,
    },

    imagem:{
        height: "60%",
        width: "60%",
        borderRadius: 9999,
    },

    text:{
        fontFamily: "Arial",
        fontSize: 20,
        color: "#d9d9d9",
        fontWeight: "bold"
    },

    text2:{
        fontFamily: "Arial",
        fontSize: 12,
        color: "#d1d1d1",
    },

    container_div:{
        flex: 1,
        flexDirection: "row",
    }, 
    
    container_img:{
        margin: 2,
        width: "15%",
        justifyContent: "center",
        alignItems: "center"
    },

    container_text:{
        width: "85%",
        flex:1,
        flexDirection: "row"
    },

    nomes:{
        margin:5,
        height: "100%",
        width: "50%",
        flexDirection: "column",
        gap: 15,
    },

    sockt: {
        justifyContent: "center",
        textAlign: "left"
    },

    nome: {
        justifyContent: "center",
        textAlign: "justify"
    },

    valores:{
        margin:5,
        height: "100%",
        width: "50%",
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
    },

    preco:{
        color: "#d1d1d1",
    },

    vermelho:{
        color: "#f87272"
    },

    verde:{
        color: "#3ad09a"
    },

    precos:{
        flexDirection: "row",
        gap: 5,

        textAlign: "center",
        justifyContent: "center"
    }


})
export default styles