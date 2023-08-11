import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container_back: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    height: "75%",
    backgroundColor: "#000"
  },

  container: {
    flex: 1,
    backgroundColor: "#32323275",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  container_traco:{
    width: "100%",
    heigt: "5%",
    justifyContent: "center",
    alignItems: "center"
  },

  traco:{
    fontSize: 30,
    color: "#0CBECE"
  },

  container_valor_mm:{
    height: 20,
    flexDirection: "row"
  },
  container_valor_lp:{
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: "3%"
  },

  back:{
    backgroundColor: "#32323280",
    padding: 5,
    borderRadius: 8
  },

  container_inf:{
    flexDirection: "row",
    marginTop: "3%",
    height: "10%",
    width: "100%",
  },

  container_img:{
    margin: 2,
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center"

  },

  imagem:{
    height: 60,
    width: 60,
    borderRadius: 9999,
  },

  vermelho:{
    fontFamily: "Arial",
    fontSize: 16,
    color: "#f87272"
  },

  verde:{
    fontFamily: "Arial",
    fontSize: 16,
    color: "#3ad09a"
  },

  text:{
    fontFamily: "Arial",
    fontSize: 15,
    color: "#d9d9d970",
    fontWeight: "bold"
  },

  text2:{
    fontFamily: "Arial",
    fontSize: 12,
    color: "#d9d9d980",
  },

  text_val:{
    fontFamily: "Arial",
    fontSize: 18,
    color: "#d9d9d970",
    fontWeight: "bold"
  },

  container_linha:{
    marginTop: "3%",
    justifyContent: "center",
    alignItems: "center"
  },

  linha:{
    height: 2,
    width: "90%",
    backgroundColor: "#0CBECE80"
  },

  container_nome:{
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  container_valor:{
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },


   })
export default styles