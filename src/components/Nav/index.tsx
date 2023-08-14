import {View, TextInput,Text, Image, ScrollView, TouchableOpacity} from "react-native"
import { BiHistory } from 'react-icons/bi';
import { MdToday } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import styles from "./style"

export default function Nav(){
    return(
        <View style={styles.container_nav}>
            <View style={styles.container_bt}>
                <TouchableOpacity>
                    <View style={styles.back_select}>
                        <Text style={styles.bt_select}><MdToday/></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.container_bt}>
                <TouchableOpacity>
                    <View style={styles.back}>
                        <Text style={styles.bt}><BsGraphUp/></Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.container_bt}>
                <TouchableOpacity>
                    <View style={styles.back}>
                        <Text style={styles.bt}><BiHistory/></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}