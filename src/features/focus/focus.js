import  React,{useState} from 'react';
import { Text, View, StyleSheet,Alert } from 'react-native';
import { TextInput } from 'react-native-paper'
import { RoundedButton } from './../../components/roundedButton' 



export const Focus=({ addSubject })=>{
const [tmpItem,setTmpItem]=useState(null)
return (
<View style={styles.container}>
    <View style={styles.tittleContainer}>
        <Text style={styles.tittle}>
           Sur quoi dois tu te concentrer?
        </Text>
        <View style={styles.inputContainer}>
         <TextInput
          style={styles.input}

       onSubmitEditing={
         ({nativeEvent})=>{
          setTmpItem(nativeEvent.text)
         }}
        />
      <RoundedButton
        
        onPress={()=>{
          addSubject(tmpItem)
        }
          
        }
        
        size={50} tittle="+" 
      /> 
        </View>
    </View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 50,
  },
  tittleContainer:{
    flex:0.7,
    padding:20,
    justifyContent: "center",
    textAlign:"center",
  },
  tittle:{
      color:"white",
      fontWeight:"bold",
      fontSize:26,
  },
  inputContainer:{
    paddingTop:20,
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    width:'80%',
    flex:1,
    marginRight:20,
  }
});
