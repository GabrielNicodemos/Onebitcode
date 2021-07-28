import React, { useState } from 'react';
import { 
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
  FlatList 
} from 'react-native';

import ResultImc from './ResultImc/Index';
import styles from './style';

export default function Form(){

  const [height, setHeight ] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMesage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  function imcCalculator() {
    let heightFormat = height.replace(",",".")
    let weightFormat = height.replace(",",".")
    let calc = (weightFormat/(heightFormat * heightFormat).toFixed(2))
    setImcList((arr) => [...arr, {id: new Date().getTime() , imc: calc}])
    setImc(calc)
  }

  function verificationHeight(){
    if(height == null){
      Vibration.vibrate();
      setErrorMessage("campo obrigatório*")
    }
  }

  function verificationWeight(){
    if(weight == null){
      Vibration.vibrate();
      setErrorMessage("campo obrigatório*")
    }
  }

  function validationImc(){
    console.log(imcList)
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      setErrorMessage(null)
    } else {
      verificationWeight()
      verificationHeight()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e a altura")
    }  
  }

  return(
    <View style={styles.formContext}>
      {imc == null ? 
      <Pressable onPress={Keyboard.dismiss} style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        { height == null ?
          <Text style={styles.errorMesage}>{errorMesage}</Text>
          : <Text />
        }
        <TextInput
        style={styles.formInput}
        onChangeText={setHeight}
        value={height}
        placeholder="Ex. 1.85"
        keyboardType="numeric"
        mask={"0.00"}
        />

        <Text style={styles.formLabel}>Peso</Text>
        { weight == null ?
          <Text style={styles.errorMesage}>{errorMesage}</Text>
          : <Text />
        }
        <TextInput
        style={styles.formInput}
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 85.45"
        keyboardType="numeric"
        />

        <TouchableOpacity
        style={styles.buttonCalc}
        onPress={() => validationImc()}
        >
          <Text style={styles.TextbuttonCalc}>{textButton}</Text>
        </TouchableOpacity>
      </Pressable>
      : <View style={styles.exibitionResultImc}>
          <ResultImc 
          messageResultImc={messageImc}
          resultImc={imc}
          />
          
          <TouchableOpacity
          style={styles.buttonCalc}
          onPress={() => validationImc()}
          >
          <Text style={styles.TextbuttonCalc}>{textButton}</Text>
        </TouchableOpacity>
        </View>
      }
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({item}) =>{
          return( 
            <Text style={styles.resultImcItem}>
              <Text style={styles.resultImcText}>Resultado IMC = </Text>
              {item.imc.toFixed(2)}
            </Text>
          )
        }}
        keyExtractor={(item) => {
          item.id
        }}
      >
      </FlatList>
    </View>
  );
}