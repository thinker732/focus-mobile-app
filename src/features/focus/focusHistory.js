import React from 'react'
import {View ,StyleSheet , FlatList ,Text, SafeAreaWiew} from 'react-native'




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
        </View>
        <View style={styles.clearContainer}>
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
  }
})
