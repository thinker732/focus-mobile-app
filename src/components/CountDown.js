import React, {useState} from 'react'
import {Text,View,StyleSheet} from 'react-native'


const minutesToMillis=
(min)=>min*1000*60


const formatTime=(time)=>
time<10?`0${time}`:time
export const Countdown=({
    minutes=20,
    isPaused,
})=>{

const [millis,setMillis]=useState(minutesToMillis(minutes))
  
const minute=Math.floor(millis/1000/60)%60
const second=Math.floor(millis/1000)%60
  return (

    <Text style={styles.text}>
        {formatTime(minute)+":"+formatTime(second)}
    </Text>
  
  )


}


const styles = StyleSheet.create({

    text:{
      fontSize:80,
      fontWeight:'bold',
      color:'#fff',
      textAlign:'center',
      padding:16,
      backgroundColor:'rgba(94,132,226,0.3)'
    }

})