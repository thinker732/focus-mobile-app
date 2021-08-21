import React,{useState} from 'react';
import { View, StyleSheet, Text ,Platform, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper'
import {useKeepAwake} from 'expo-keep-awake';

import { Countdown } from '../../components/CountDown';
import {RoundedButton} from '../../components/roundedButton'
import {Timing} from './timing'

const DEFAULT_TIME=0.05;

export const Timer = ({ focusSubject ,returnFocus,clearSubject }) => {
  useKeepAwake()
  const [minutes,setMinutes]=useState(DEFAULT_TIME)
  const [isStarted,setIsStarted]=useState(false)
  const [progress,setProgress]=useState(1)

const vibrate=()=>{
  if(Platform.OS==='ios'){
      const vib=setInterval(()=>Vibration.vibrate(),1000)
      setTimeout(()=>clearInterval(vib),10000)
  }
  else{
      Vibration.vibrate(10000)
  }
}
  const onProgress=(progress)=>{
    setProgress(progress)
  }

  const onEnd=()=>{
    vibrate()
      setMinutes(DEFAULT_TIME);
      setProgress(1)
      setIsStarted(false)
      returnFocus()
  }

  const changeTime=(min)=>{
      setMinutes(min)
      setProgress(1)
      setIsStarted(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress} onEnd={onEnd} minutes={minutes}/>
      </View>
      <View style={{ paddingTop: 40 }}>
        <Text style={styles.title}>Focus</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <ProgressBar
        color='#5E24E2'
        progress={progress}
        style={{height:10,marginTop:15}}

        />
        <View style={styles.buttonWrapper,{flexDirection:'row'}}>
            <Timing onChangeTime={changeTime}/>
        </View>
      <View style={styles.buttonWrapper}>
      {!isStarted?
      <RoundedButton tittle="start" 
      
        onPress={()=>{
            setIsStarted(true)
        }}
      />:
      <RoundedButton tittle="pause" 
      
        onPress={()=>{
            setIsStarted(false)
        }}
      />

      }
     
      </View>
       <View style={styles.clear}>
          <RoundedButton tittle="-" 
              size={50}
        onPress={()=>{
            clearSubject()
         }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  task: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countdown: {
    //flex:0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper:{
    flex:0.3,
    flexDirection:'row',
    marginTop:'20%',
    padding:20, 
    justifyContent:"center",
    alignItems:'center'
  },
  clear:{
    paddingBottom:25,
    paddingLeft:25,
  }
});
