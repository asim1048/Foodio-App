import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet
} from 'react-native'; 

import { SIZES, COLORS, FONTS, icons} from '../constants';

const RecipeCardDetail=({recipeItem})=>{
  return(
    <View style={{flex:1}}> 
       {/* Name * Bookmark section */}
       <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
       }}>
          <Text style={{
            color:COLORS.white,
            ...FONTS.h3,
            fontSize:18,
            width:'70%'
          }}>{recipeItem.name}
          </Text>
          <Image
              source={recipeItem.isBookmark ? icons.bookmarkfield : icons.bookmark}
              style={{
                width:20,
                height:20,
                marginRight:SIZES.base,
                tintColor:COLORS.darkGreen,
              }}
          />
       </View>

       {/* Duration */}
       <Text style={{
          color:COLORS.lightGray,
          ...FONTS.body4,
       }}>{recipeItem.duration} | {recipeItem.serving} serving
       </Text>
    </View> 
  )
}

const RecipeCardInfo=({recipeItem})=>{
     //For android only
     return(
       <View style={{
              position:'absolute', 
              bottom:10,
              left:10,
              right:10,
              height:80,
              paddingVertical:SIZES.radius,
              paddingHorizontal:SIZES.base,
              borderRadius:SIZES.radius,
              backgroundColor:COLORS.transparentDarkGray,
       }}>
       <RecipeCardDetail
          recipeItem={recipeItem}/>
       </View>
     )
}


export default TrendingCard=({ containerStyle, recipeItem, onPress})=>{
  return(
    <TouchableOpacity
      style={{
        height:320,
        width:230,
        marginTop:SIZES.radius,
        marginRight:15,
        borderRadius:SIZES.radius,
        ...containerStyle
      }}
      onPress={onPress} 
    >
      {/* Image */}
      <Image
          source={recipeItem.image}
          resizeMode='cover'
          style={{
            height:320,
             width:230,
             borderRadius:SIZES.radius, 
          }}
      />
      {/* Category */}
      <View style={{
        position:'absolute',
        top:20,
        left:15,
        paddingHorizontal:SIZES.radius,
        paddingVertical:5,
        backgroundColor:COLORS.transparentGray,
        borderRadius:SIZES.radius, 
      }}> 
        <Text style={{
          color:COLORS.white,
          ...FONTS.h4, 
        }}>{recipeItem.category}</Text>
      </View>

      {/*  CardInfo */}
      <RecipeCardInfo
          recipeItem={recipeItem}
      />
    </TouchableOpacity>
  )
}


