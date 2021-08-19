import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

import {Countdown} from '../../components/CountDown'

export const Timer=({focusSubject})=>{

return (
  <View style={styles.container}>
    <Countdown/>
  <View style={{paddingTop:40}}>
  <Text style={styles.title}>
    Focus
  </Text>
  <Text style={styles.task}>{focusSubject}</Text>
  </View>
  </View>
  )
}


const styles=StyleSheet.create({

  container:{
    flex:1,
  },
  title:{
    color:'#fff',
    textAlign:'center',
  },
  task:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  }
})