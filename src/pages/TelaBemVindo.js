import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Imagem from "../Components/Imagem/Imagem";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
export default function TelaBemVindo() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation={"flipInY"} style={styles.containerLogo}>
                <Imagem/>
            </Animatable.View>
            <Animatable.View delay={800} animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.titulo}>A melhor Universidade Privada do País!</Text>
                <Text style={styles.texto}>Faça Seu login para começar!</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textoBotao}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#e1e1e1',
        justifyContent: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    titulo:{
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 12,
    },
    texto:{
        color: '#a1a1a1'
    },
    botao:{
        height: 60,
        position: "absolute",
        backgroundColor: '#5B2311',
        borderRadius: 10,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '12%',
        alignItems: "center",
        justifyContent: "center",
       
    },
    textoBotao:{
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
    }

})