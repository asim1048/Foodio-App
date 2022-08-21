import React from 'react';
import {TouchableOpacity,Text,View} from 'react-native';
import {COLORS,FONTS} from '../constants';

const CustomButtons=({ buttonText, buttonContainerStyle, colors, onPress}) => {
  if(colors.length>0){//For login
    return(
      <TouchableOpacity onPress={onPress} style={{justifyContent:'center'}}>
        <Text style={{
          textAlign:'center',
          ...FONTS.h2,
          fontSize:35,
          paddingTop:12,
          height:50,
          borderWidth:1,
          borderRadius:15,
          backgroundColor:COLORS.darkGreen,
          color:COLORS.white,
        }}>{buttonText}</Text>
      </TouchableOpacity>
    )
  } else {
    return(
     <View style ={{paddingTop:10,}}>
        <TouchableOpacity onPress={onPress} style={{justifyContent:'center'}}>
          <Text style={{
          textAlign:'center',
          ...FONTS.h2,
          fontSize:35,
          paddingTop:12,
          height:50,
          color:'red',
          borderWidth:1,
          borderColor:COLORS.darkGreen,
          borderRadius:15,
        }}>{buttonText} </Text> 
       </TouchableOpacity>
      </View>
    )
  }
}  

export default CustomButtons;