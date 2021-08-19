import React from 'react'
import { TouchableOpacity,Text,StyleSheet,Alert} from 'react-native';


export const RoundedButton=({
  style={},
  textStyle={},
  size=75,
  ...props
})=>{
return(
  <TouchableOpacity style={[
      styles(size).radius
    ]}
    onPress={props.onPress}
    >
   <Text 
style={[styles(size).text]}>{props.tittle}
    </Text>
    </TouchableOpacity>
    )
}


const styles=(size) =>
StyleSheet.create({
  radius:{
    borderRadius:size/2,
    width:size, 
    height:size,
    alignItems:'center',
    justifyContent:'center',
    borderColor:"#fff",
    borderWidth:2,
  },
  text:{
    color:'#fff',
    fontSize:size/3,
  },
})