import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
        container: {
          flex:1, 
          backgroundColor: "#1E1E1E"
        
        },
    
        image:{
            height: 300,
            borderRadius: 8,
        },
    
        container2:{
            height: 80,
            justifyContent: "center",
            alignItems:"center"
        },

        container_input:{
            flexDirection: "row",
            height: 40,
            width: 370,
            borderRadius: 8,
            backgroundColor: "#168624",
        },
        input: {
            color: "#d9d9d9",
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
            color: "#c7c7c7",
            margin: 2,
            height: "100%",
            fontSize: 16,
            width: "10%",
            backgroundColor: "transparent",
            borderWidth: 0,
            borderColor: 'transparent',
        },

        linha:{
            width: "100%",
            height: 1,
            backgroundColor: "#d9d9d9"
        },

        container_acoes:{
            width: "100%",
        }
      })
export default styles