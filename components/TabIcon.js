import React from 'react';
import {View,Image} from 'react-native';
import {COLORS} from '../constants'

export default TabIcon=({focused,icon})=>{
  return(
    <View style={{
      alignContent:'center',
      justifyContent:'center',
      height:50,
      width:27,
    }}>
    <Image
      source={icon}
      resizeMode='contain'
      style={{
        height:30,
        width:30,
        tintColor:focused? COLORS.darkGreen : COLORS.lightLime
      }}
    />
    {focused &&
      <View
        style={{
          position:'absolute',
          left:0,
          right:0,
          bottom:0,
          height:3,
          borderTopLeftRadius:3,
          borderTopRightRadius:3,
          backgroundColor:COLORS.darkGreen,
        }}
      />
    }
    </View>
  )
}