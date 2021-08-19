import  React,{useState} from 'react';
import { Text, View, StyleSheet,Platform} from 'react-native';
import {Focus} from './src/features/focus/focus'
import {Timer} from './src/features/timer/timer'
import Constants from 'expo-constants';

export default function App() {


const [focusSubject,setFocusSubject]=useState("coding")

  const change=()=>{
    setFocusSubject(1)
  }
  return (<View style={styles.container}>
      {focusSubject?
      (
        <Timer focusSubject={focusSubject}/>
        )
        :
        (
        (
        
        <Focus addSubject={setFocusSubject} />
        )
        )
        
      }
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EEB76B',
    paddingTop:Platform.Os==='ios'?40:35,
  },
});
