import {View, Text  } from "react-native"
import styles from "./style"

interface valores_props{
    titulo: string,
    sifra: string, 
    valor: number
}

const Linha: React.FC<valores_props> = ({titulo, sifra, valor}) => {
    return(
        <View style={styles.container_inf}>
            <View style={styles.inf_titulo}>
                <Text style={styles.titulo_t}>{titulo}</Text>
            </View>
            <View style={styles.inf_valor}>
                <Text  style={styles.valor}>{sifra}{valor}</Text>
            </View>
        </View>
    )
}

export default Linha