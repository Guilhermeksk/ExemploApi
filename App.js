import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable } from 'react-native';
import Cep from './componentes/Cep';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.bloco}>
    <Text style={styles.texto}>Digite seu CEP</Text>
      
<TextInput
placeholder='ex: 11740000'
keyboardType='numeric'
style={styles.input}
/>

<TouchableOpacity
  style={styles.bloco}
  >
    <Text style={styles.txtBloco}>Buscar</Text>
</TouchableOpacity>

<Cep/>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco:{
width:'100%',
alignItems: 'center',
  },

  texto:{
    fontSize:20,
  },

  input:{
    width:'80%',
    marginLeft:'5%',
    borderBottomWidth:1,
marginTop:20,
fontsize:30
  },

  botao:{
    width:'80%',
    margintop:30
  },

  txtBotao:{
    fontSize:20,
    textAling:'center'
  }
});
