import React from 'react'
import {View , StyleSheet} from 'react-native'

import {RoundedButton} from '../../components/roundedButton'


export const Timing=({
  onChangeTime
})=>{
  return(
    <>
      <View style={styles.timingButtton}>
      <RoundedButton size={75} tittle='10' onPress={()=>onChangeTime(10)}/> 
      <RoundedButton size={75} tittle='15' onPress={()=>onChangeTime(15)}/> 
      <RoundedButton size={75} tittle='20' onPress={()=>onChangeTime(20)}/> 
      </View>
    </>
  )
}


const styles=StyleSheet.create({
  timingButtton:{
    flex:1,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:"center"
  }
})