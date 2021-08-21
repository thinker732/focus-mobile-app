import React from 'react'
import {View ,StyleSheet , FlatList ,Text, SafeAreaWiew} from 'react-native'

import {RoundedButton} from '../../components/roundedButton'


const HistoryItem=({item ,index})=>{
  return (
    
    <Text style={styles.historyItem(item.status)}>
      {item.subject}
    </Text>
    
  )
}

export const FocusHistory=({focusList,onClear })=>{


  const clearHistory=()=>{
    onClear()
  }

  return (
    <>
        <View style={{flex:1,alignItems:'center'}}>
             <Text style={styles.title}>Taches terminees </Text>
            {!!focusList.length && (
                <FlatList
                  style={{flex:1}}
                  contentContainerStyle={{flex:1,alignItems:'center'}}
                  data={focusList}
                  renderItem={HistoryItem}
                />
              )
            }
            <View style={styles.clearContainer}>
            <RoundedButton title='clear' size={75} onPress={()=>onClear()}/>
        </View>
        </View>
       
    </>
  )
}

const styles=StyleSheet.create({
  historyItem:(status)=>({
    color:status?'green':'red',
    fontSize:16
  }),
  title:{
    color:'white',
    fontSize:20
  },
  clearContainer:{
      alignItems:'center',
      padding:10
  }
})
