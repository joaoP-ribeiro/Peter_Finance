import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container_nav:{
        marginTop: 3,
        width: "100%",
        height: "4%",
        flexDirection: "row",
    },

    container_bt:{
        height: "100%",
        width: "33%",
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
    
})
export default styles