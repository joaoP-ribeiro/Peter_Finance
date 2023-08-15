import {View, TextInput,Text, Image, ScrollView, TouchableOpacity} from "react-native"
import {useState, useEffect } from "react"
import { BiHistory } from 'react-icons/bi';
import { MdToday } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import Ontem from "../Ontem";
import Ano from "../Ano";
import Hoje from "../Hoje/index"

import styles from "./style"

interface nav_props{
    nome_acao: string
}


const Nav: React.FC<nav_props> = ({ nome_acao}) => {
    const [tela, set_tela] = useState<"Hoje" | "Ontem" | "Ano" | "Grafico">("Hoje");

    const telas = () => {
      if (tela === "Hoje") {
        return <Hoje nome_acao={nome_acao} />;
      } else if (tela === "Ontem") {
        return <Ontem nome_acao={nome_acao} />;
      } else if (tela === "Ano") {
        return <Ano nome_acao={nome_acao} />;
      }
    };
    return(
        <View style={styles.container_p}>
            <View style={styles.container_linha}>
                <View style={styles.linha}></View>
            </View>
            <View style={styles.container_nav}>
                <View style={styles.container_bt}>
                    <TouchableOpacity onPress={() => set_tela("Hoje")}>
                        <View style={styles.back}>
                            <Text style={styles.bt}><MdToday/></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_bt}>
                    <TouchableOpacity onPress={() => set_tela("Hoje")}>
                        <View style={styles.back}>
                            <Text style={styles.bt}><BsGraphUp/></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_bt}>
                    <TouchableOpacity onPress={() => set_tela("Ontem")}>
                        <View style={styles.back}>
                            <Text style={styles.bt}><BiHistory/></Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.container_bt}>
                    <TouchableOpacity onPress={() => set_tela("Ano")}>
                        <View style={styles.back}>
                            <Text style={styles.bt}><FaBirthdayCake/></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={styles.container_inf}>
                {telas()}
            </ScrollView>
        </View>
    )
}

export default Nav