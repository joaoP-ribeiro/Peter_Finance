import {View, TextInput,Text, Image, ScrollView, TouchableOpacity} from "react-native"
import { BiSolidUpArrow } from 'react-icons/bi'
import { BiSolidDownArrow } from 'react-icons/bi'
import {useState, useEffect } from "react"
import Modal from 'react-native-modal'
import Info from "../Info/index"

import styles from "./style"

type Acao = {
    stock: string,
    name: string,
    close: number,
    change: number,
    logo: string
}



export default function Carta({ acao }: { acao: Acao }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const mostrar_modal = () => {
        setModalVisible(!isModalVisible);
    };
    function estilo(valor: number) {
        if (valor < 0) {
          return styles.vermelho;
        } else {
          return styles.verde;
        }
      }

    return(
        <View>
        <TouchableOpacity
            onPress={mostrar_modal}
        >
            <View style={styles.container}>
                <View style={styles.container_div}>
                    <View style={styles.container_img}>
                        <Image
                            source={{uri: acao.logo}}
                            style={styles.imagem}
                        />
                    </View>
                    <View style={styles.container_text}>
                        <View style={styles.nomes}>
                            <View style={styles.sockt}>
                                <Text style={styles.text}>{acao.stock}</Text>
                            </View>
                            <View style={styles.nome}>
                                <Text style={styles.text2}>{acao.name}</Text>
                            </View>
                        </View>
                        <View style={styles.valores}>
                            <View>
                                <Text style={styles.preco}>R$: {acao.close.toFixed(2)}</Text>
                            </View>
                            <View style={styles.precos}>
                                <Text style={estilo(acao.change)}>{ acao.change < 0 ? <BiSolidDownArrow/>:<BiSolidUpArrow/>}</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
                <View>
                    
                </View>
                
            </View>
        </TouchableOpacity>
            <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={styles.container_back}>
                    <View style={styles.container_top}>
                        <View style={styles.container_traco}>
                            <TouchableOpacity 
                                onPress={mostrar_modal}
                            >
                                <Text style={styles.traco}><BiSolidDownArrow/></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Info nome_acao={acao.stock} valor_acao={acao.close}/>
                </View>
            </Modal>
        </View>

        
    )
}