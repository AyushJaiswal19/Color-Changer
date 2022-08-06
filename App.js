import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [RandomColor, setRandomColor] = useState('rgb(30,0,126)')

  function BGColor() {
    let color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    setRandomColor(color)
  }

  function Restart() {
    let color= 'rgb(0,0,0)'
    setRandomColor(color)
  }
  return (
    <View style={[styles.container, {backgroundColor:RandomColor}]} >
      <TouchableOpacity onPress={() => BGColor()}>
        <Text style={styles.text}>RANG DE BASANTI</Text>
      </TouchableOpacity>
    <View style={{margin:'20%'}}>
      <TouchableOpacity onPress={()=> Restart()}>
        <Text style={[styles.text, {backgroundColor:"blue"}]}>KALLO</Text>
      </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color:"#fff",
    backgroundColor:"#BB2CD9",
    fontSize:30,
    padding: 20,
    margin: 5,
    borderRadius:60,
    textTransform:"uppercase"
  }
});
