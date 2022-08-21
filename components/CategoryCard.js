import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native'

import {COLORS,FONTS,SIZES} from '../constants'

const CategoryCard=({ containerStyle, categoryItem, onPress}) => {
    return(        
        <TouchableOpacity
            style={{
              flexDirection:'row',
              alignItems:'center',
              paddingTop:20,
              marginTop:5,
              borderRadius:SIZES.radius,    
              backgroundColor:COLORS.gray2, 
              ...containerStyle,
            }}
            onPress={onPress}
        >
            {/* Images */}
            <Image
                source={categoryItem.image}
                resizeMode='cover'
                style={{
                  width:100,
                  height:100, 
                  borderRadius:SIZES.radius
                }}
            />
            {/* Details */}
            <View style={{
                width:'65%',
                paddingHorizontal:20,
            }}>
              {/* Name */}
              <Text style={{
                flex:1,
                ...FONTS.h2,
                fontWeight:'bold',
              }} 
              > {categoryItem.name}</Text>
              {/* Serving */}
              <Text style={{
                color:COLORS.gray,
                ...FONTS.body4,
              }}> 
                  {categoryItem.duration} | {categoryItem.serving} Serving
              </Text>
  
            </View> 
        </TouchableOpacity>  
   
    )  
} 
export default CategoryCard;  
