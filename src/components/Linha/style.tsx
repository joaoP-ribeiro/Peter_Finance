import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container_inf:{
        marginTop: "5%",
        height: 55,
        backgroundColor: "#323232",
        borderRadius: 8,
        flexDirection: "row"
    },

    inf_titulo:{
        marginLeft: 5,
        height: "100%",
        width: "60%",
        justifyContent: "center"
    },

    inf_valor:{
        height: "100%",
        width: "50%",
        justifyContent: "center",
        textAlign: "justify"
    },


    titulo_t:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#0CBECE"
    },

    valor:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#d9d9d9"
    },
})

export default styles