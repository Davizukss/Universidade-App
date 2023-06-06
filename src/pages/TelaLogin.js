import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Inputinicial from '../Components/Input/Input';
import Linha from '../Components/Linha/Linha';
import Imagem from '../Components/Imagem/Imagem';
import * as Animatable from 'react-native-animatable';

export default function TelaLogin({ navigation }) {
  return (
    <ScrollView styles={styles.scrView}>
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Bem-Vindo(a)</Text>
        </View>
        <View style={styles.form}>
        <View style={styles.img}>
          <Imagem/>  
          </View>
          <View style={styles.input}>
            <Inputinicial></Inputinicial>
          </View>
          <Animatable.View delay={500} animation={'fadeInLeft'} style={styles.centraliza}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('TelaPrincipal')}><Text style={styles.botaoTxt}>Entrar</Text></TouchableOpacity>
          </Animatable.View>
          <View>
          </View>
          <Text style={styles.Registrar}>Novo por aqui? <Text style={styles.linha} onPress={() => navigation.navigate('Registre')}>Registre-se </Text>
          </Text>
          <Linha></Linha>
          <Text style={styles.EsqueceuSenha} onPress={() => navigation.navigate('Recuperar')}> Esqueceu sua Senha?</Text>
        </View>
      </View>
    </ScrollView>


  )
}
const styles = StyleSheet.create({
  scrView: {
    height : '50%'
  },

  container: {
    height: 800,
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    marginTop: '10%',
    marginBottom: '25%',
    height: '15%',
    resizeMode: 'contain', 
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
    marginTop: '6%',
    backgroundColor: "#fff",
    marginBottom: '8%',
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
    marginTop: 20,
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
