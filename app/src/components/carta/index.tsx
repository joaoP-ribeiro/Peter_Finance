import {View, TextInput,Text, Image, ScrollView,} from "react-native"
import { ImSearch } from 'react-icons/im';

import styles from "./style"

type Acao = {
    stock: string,
    close: number,
    change: number,
    logo: string
}

export default function Carta({ acao }: { acao: Acao }) {
    return(

        <View style={styles.container}>
            <View style={styles.container_div}>
                <View style={styles.container_img}>
                    <Image
                        source={{uri: acao.logo}}
                        style={styles.imagem}
                    />
                </View>
                <View style={styles.container_text}>
                    <View style={styles.sockt}>
                        <Text style={styles.text}>{acao.stock}</Text>
                    </View>
                    <View>
                        <View>

                        </View>
                        <View>
                        
                        </View>
                    </View>
                    
                </View>
            </View>
            <View>
                 
            </View>
            
        </View>

        
    )
}