import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput ,TouchableOpacity, Alert} from 'react-native';
import Header from '../components/Header'

export function CalcScreen2() {

  const [valorGorduraSeca, setValorGorduraSeca]=useState('')
  const [valorLeite, setValorLeite]=useState('')
  const [valorGorduraLeite, setValorGorduraLeite]=useState('')
  const [valorPeso, setValorPeso]=useState('')

    const handleChangeGorduraSeca = (novoValorGorduraSeca) => {
      setValorGorduraSeca(novoValorGorduraSeca);
    };
    const handleChangeLeite = (novoValorLeite) => {
      setValorLeite(novoValorLeite);
    };
    const handleChangeGorduraLeite = (novoValorGorduraLeite) => {
      setValorGorduraLeite(novoValorGorduraLeite);
    };
    const handleChangePeso = (novoValorPeso) => {
      setValorPeso(novoValorPeso);
    };

    const handleSubmitResultado = () => {
      const LGC = ((valorGorduraSeca * valorLeite + 15) * (valorGorduraLeite)).toFixed(2)
      const materiaSecaporLitro = ((valorGorduraSeca/LGC) * (valorGorduraSeca * 10)).toFixed(2)
      const materiaSeca = ((materiaSecaporLitro * valorPeso)/10).toFixed(2)

      Alert.alert(
        `A ingestão ideal da vaca é: ${materiaSeca} KG por dia`)

      setValorGorduraSeca('')
      setValorLeite('')
      setValorGorduraLeite('')
      setValorPeso('')
    }

  return(
    <ScrollView style={styles.containerMain}>

    <Header screen='Selection'/>
      <View style={styles.container}>
        <Text style={styles.textMain}>Insira os Valores desejados:</Text>
        <Text style={styles.text}>Gordura da matéria seca (%):</Text>
        <TextInput
          value={valorGorduraSeca.toString()}
          style={styles.input} 
          onChangeText={handleChangeGorduraSeca}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Valor de leite por dia (L):</Text>
        <TextInput 
          value={valorLeite.toString()}
          style={styles.input}  
          onChangeText={handleChangeLeite}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Valor da gordura do leite (%):</Text>
        <TextInput 
          value={valorGorduraLeite.toString()}
          style={styles.input} 
          onChangeText={handleChangeGorduraLeite}
          keyboardType="numeric"
          />
        <Text style={styles.text}>Peso do animal (Kg):</Text>
        <TextInput 
          value={valorPeso.toString()}
          style={styles.input} 
          onChangeText={handleChangePeso}
          keyboardType="numeric"
          />

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleSubmitResultado} style={styles.button}>
            <Text style={styles.textCalcular}>Calcular</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  container:{
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingStart: 25,
    paddingEnd: 25,
    justifyContent: 'center',
  },
  input:{
    borderBottomColor:'#ccc', 
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingBottom:15, 
    marginBottom:25
  },
  text: {
    fontSize: 16,
  },
  textMain: {
    fontSize: 28, 
    color: '#228866',
    paddingTop: 20,
    paddingBottom: 40,
    alignSelf: 'center'
  },
  containerButton:{
    marginTop:50,
  },
  button:{
    backgroundColor: '#1680E1',
    padding: 15,
    borderRadius: 10,
    marginBottom:30,
  },
  textCalcular:{
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    color: '#fff'
  }
})