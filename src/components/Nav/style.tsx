import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container_p:{
        width: "100%",
        flex: 1,
    },

    container_linha:{
        marginTop: "2%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2%"
      },
    
      linha:{
        height: 2,
        width: "90%",
        backgroundColor: "#0CBECE80"
    },
    container_nav:{
        marginTop: 3,
        height: "4%",
        flexDirection: "row",
    },

    container_bt:{
        height: "100%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center"
    },

    back:{
        height: 25,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#32323270",
        borderRadius: 8
    },

    back_select:{
        height: 25,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d9d9d9",
        borderRadius: 8
    },

    bt:{
        fontSize: 15,
        color: "#0CBECE"
    },

    bt_select:{
        fontSize: 15,
        color: "#000",
    },

    container_inf:{
        marginTop: "3%"
    },
    
})
export default styles