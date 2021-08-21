import  React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Platform,AsyncStorage} from 'react-native';


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


 
const addFocusToHistory=(subject,status)=>{
  setFocusHistory([...focusHistory,{key:String(focusHistory.length+1),subject,status}])
}


useEffect(()=>{

    saveFocusHistory();

},[focusHistory])



const onClear=()=>{
  setFocusHistory([])
}

const saveFocusHistory=async()=>{
  try{
      AsyncStorage.setItem("focusHistory",JSON.stringify(focusHistory))
  }
  catch(e){
      console.log(e)
  }
}

const loadFocusHistory=async()=>{
  try{
      const history=await AsyncStorage.getItem('focusHistory')

      if(history && JSON.parse(history).length){
        setFocusHistory(JSON.parse(history))
      }
  }
  catch(e){
      console.log(e)
  }
}

useEffect(()=>{
 loadFocusHistory()
},[])

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
