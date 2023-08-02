import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
        container: {
          flex:1, 
          backgroundColor: "#000"
        
        },
    
        image:{
            height: 300,
            borderRadius: 8,
        },

        container2:{
            height: "15%",
            justifyContent: "center",
            alignItems:"center"
            
        },
    
        container3:{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems:"center",
            backgroundColor: "#323232"
        },

        text:{
            fontSize:20,
            color: "#0CBECE",
            fontWeight: "bold",
            margin: 10,
        },

        container_input:{
            flexDirection: "row",
            height: 40,
            width: "90%",
            borderRadius: 4,
            backgroundColor: "#FBFBFB",
        },
        input: {
            color: "#1B2311",
            borderWidth: 0,
            borderColor: 'transparent',
            padding: "3%",
            width: "90%",
            height: "100%",
            fontSize: 16,
            outlineColor: 'transparent',
            outlineWidth: 0,
            
        },
    
        botao:{
            color: "#1B2311",
            height: "100%",
            fontSize: 16,
            width: "12%",
            backgroundColor: "#0CBECE",
            borderWidth: 0,
            borderColor: 'transparent',
            borderRadius: 4,
        },


        container_acoes:{
            width: "100%",
        }
      })
export default styles