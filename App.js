import  React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Platform} from 'react-native';


import {FocusHistory} from './src/features/focus/focusHistory'
import {Focus} from './src/features/focus/focus'
import {Timer} from './src/features/timer/timer'
import Constants from 'expo-constants';

const STATUSES={
   COMPLETED:1,
   CANCELLED:0
}

export default function App() {


const [focusSubject,setFocusSubject]=useState(null)
const [focusHistory,setFocusHistory]=useState([])

/*
useEffect(()=>{

    if(focusSubject)
        setFocusHistory([...focusHistory,focusSubject])

},[focusSubject])*/

 
const addFocusToHistory=(subject,status)=>{
  setFocusHistory([...focusHistory,{subject,status}])
}

const onClear=()=>{
  
}

  return (<View style={styles.container}>
      {focusSubject?
      (
        <Timer focusSubject={focusSubject} 

        returnFocus={
          ()=>{
            addFocusToHistory(focusSubject,STATUSES.COMPLETED)
            setFocusSubject(null)
            
            }
          } 
          
          /*TO REMOVE*/
          clearSubject={
            ()=>{
              addFocusToHistory(focusSubject,STATUSES.CANCELLED)
              setFocusSubject(null)
              }
          } 
        />

        )
        :
        (
        (
        <>
            <Focus addSubject={setFocusSubject} /> 
            <FocusHistory focusList={focusHistory} onClear={onClear}/>
            
        </>
        )
        )
        
      }
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EEB76B',
    paddingTop:Platform.Os==='ios'?80:75,
  },
});
