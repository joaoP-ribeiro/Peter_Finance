import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: "#000"
      
      },
  
      imagem:{
          height: "100%",
          width: "100%",
          borderRadius: 8,
      },

      container2:{
          height: "20%",
          justifyContent: "center",
          alignItems:"center"
          
      },
  
      container3:{
          height: "100%",
          width: "98%",
          justifyContent: "center",
          alignItems:"center",
          backgroundColor: "#323232",

          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
      },

      text:{
          fontSize:20,
          color: "#0CBECE",
          fontWeight: "bold",
          margin: 10,
      },

      container_p:{
        marginTop: 10,
        margin: 10,
        flex: 1
      },

      container4:{
        alignItems: "center",
        height: "15%"
      },


      container_nomes:{
        width: "100%",
        height: "100%",
        flexDirection: "row",
      },

      container_nomes_img:{
        width: "27%",
      },

      container_nomes_inf:{
        width: "73%",
        flex: 1,
        flexDirection: "column",
        marginLeft: 8,
      },

      container_nomes_symbol:{
        width: "100%",
        height: "60%",
        justifyContent: "center",
        
      },

      symbol:{
        fontSize: 50,
        fontFamily: "arial",
        color: "#d9d9d9",
        fontWeight: "bold"
      },

      container_nomes_shortName:{
        width: "100%",
        height: "40%",
        justifyContent: "center",
        textAlign: "justify"
      },

      shortName:{
        fontSize: 13,
        fontFamily: "arial",
        color: "#d9d9d9",
        fontWeight: "bold"
      },

      container5:{
        width: "100%",
        marginTop: 15,
        alignItems: "center",
      },

      cor:{
        width: "100%",
        height: 2, 
        backgroundColor: "#0CBECE",
        borderRadius: 9999,
      },

      
      


   })
export default styles