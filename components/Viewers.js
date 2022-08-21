import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import {FONTS,COLORS} from '../constants'

export default Viewers=({viewerList})=>{
  if(viewerList?.length==0){
    return(
        <View 
            style={{
              alignItems:'center',
              justifyContent:'center',
            }}
        >
            <Text
                style={{
                  color:COLORS.lightGray2,
                  ...FONTS.body4,
                }}
            >Be the first one to try this
            </Text>
        </View>
    )
  }
  else if(viewerList?.length<=4){
    return(
      <View>
           {/* Profiles */}
          <View
              style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'flex-end',
                marginBottom:10,
              }}
          >
             {
                viewerList?.map((item,index)=>(
                  <View
                      key={index}
                      style={{
                        height:50,
                        width:50,
                        marginLeft:index==0 ? 0 : -20
                      }}
                  > 
                    <Image
                       source={item.profilePic}
                       style={{
                         width:50,
                         height:50,
                         borderRadius:25,
                       }}
                    />
                  </View>  
                ))
             }
          </View>

          {/* Text */}
          <Text
              style={{
                color:COLORS.lightGray2,
                textAlign:'right',
                lineHeight:18,
                ...FONTS.body4,
              }}
          >{viewerList?.length} people
          </Text>
          <Text
              style={{
                color:COLORS.lightGray2,
                textAlign:'right',
                lineHeight:18,
                ...FONTS.body4,
              }}
          >Already tried this!
          </Text>
      </View>
    )
  }
  else{
    return(
      <View>
           {/* Profiles */}
           <View
               style={{
                 flexDirection:'row',
                 alignItems:'center',
                 justifyContent:'flex-end',
                 marginBottom:10,
               }}
           >
              {
                viewerList?.map((item,index)=>{ 
                  if(index <=2){
                    return(
                      <View
                         key={index}
                         style={{
                           height:50,
                           width:50,
                           marginLeft:index==0? 0 : -20
                         }}
                      >
                         <Image 
                           source={item.profilePic}
                            style={{
                              height:50,
                              width:50,
                              borderRadius:25,
                            }}
                         />
                      </View>     
                    )
                  }
                  else if(index<=3){
                    return(
                       <View
                           key={index}
                           style={{
                             height:50,
                             width:50,
                             alignItems:'center',
                             justifyContent:'center',
                             marginLeft:-20,
                             borderRadius:25,
                             backgroundColor:COLORS.darkGreen,
                           }}
                       >
                          <Text
                              style={{
                                color:COLORS.white,
                                ...FONTS.body4,
                              }}
                          >{viewerList?.length-3}+
                          </Text>
                       </View>
                    )
                  }
                })
              }
           </View>
 
  
           {/* Tex t */}
           <Text
              style={{
                color:COLORS.lightGray2,
                textAlign:'right',
                lineHeight:18,
                ...FONTS.body4,
              }}
          >{viewerList?.length} people
          </Text>
          <Text
              style={{
                color:COLORS.lightGray2,
                textAlign:'right',
                lineHeight:18,
                ...FONTS.body4,
              }}
          >Already try this!
          </Text>
      </View>
    )
  }
}