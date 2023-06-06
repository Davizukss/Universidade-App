import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Linha from '../Components/Linha/Linha';
import * as Animatable from 'react-native-animatable';
import InputRegistre from '../Components/InputRegistre/InputRegistre';

export default function TelaLogin({ navigation }) {
  return (
    <ScrollView><View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Registre-se</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <InputRegistre></InputRegistre>
        </View>
        <Animatable.View delay={500} animation={'fadeInLeft'} style={styles.centraliza}>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}><Text style={styles.botaoTxt}>Cadastrar-se</Text></TouchableOpacity>
        </Animatable.View>
        <View>
        </View>
      </View>
    </View></ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      height: 800
    },
    input: {
     marginTop: '20%',
    },
    form: {
      backgroundColor: '#e1e1e1',
      flex: 1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    header: {
      marginTop: '8%',
      backgroundColor: "#fff",
      marginBottom: '4%',
      paddingStart: '5%',
      backgroundColor: '#fff',
    },
    headerText: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    centraliza: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 40,
      paddingRight: 40
    },
    botaoTxt: {
      color: '#fff',
      fontSize: 18,
      padding: 20,
      width: '100%',
      textAlign: 'center',
  
    },
    botao: {
      width: '100%',
      marginTop: 75,
      fontWeight: 800,
      backgroundColor: "#5B2311",
      borderRadius: 30,
      height: 65,
      marginBottom: 10,
    },
    Registrar: {
      color: "#a1a1a1",
      textAlign: "center",
      fontWeight: 500,
      fontSize: 18,
      marginTop: 20,
  
    },
    linha: {
      color: "#a1a1a1",
      textDecorationLine: "underline",
    },
    EsqueceuSenha: {
      textAlign: "center",
      fontWeight: 500,
      color: "#a1a1a1",
      fontSize: 18,
      marginTop: 10,
    },
  })