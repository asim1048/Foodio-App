import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar
} from 'react-native';
import {images,COLORS,SIZES,FONTS} from '../constants';
import {CustomButtons} from '../components/Index';
const Login = ({ navigation }) => {
    const renderHeader=()=>{
     return(
       <View style={{
         height:SIZES.height>700 ? "65%": "60%"
       }}>
         <ImageBackground
           source={images.loginBackground}
           style={{
             flex:1,
             justifyContent:'flex-end',
           }}>
         <Text style={{
           color:COLORS.white,
           ...FONTS.largeTitle,
           lineHeight:45,
           paddingLeft:10,
         }}>Cooking a Delicious Food easily</Text>
         </ImageBackground>
       </View>
     )
    }
    const renderDetail=()=>{
        return(
          <View style={{
            flex:1,
            paddingHorizontal:SIZES.padding,
          }}>
            {/* Description */}
            <Text style={{
              marginTop:SIZES.radius,
              width:"70%",
              color:COLORS.gray,
              ...FONTS.body3,
            }}>Discover more than 1200 food recipies in your hands and cooking it easily!
            </Text>
            {/* Buttons */}
            <View style={{
              flex:1,
              justifyContent:'center',
              paddingTop:5,
            
            }}>
              <CustomButtons
                buttonText="Login"
                colors={[COLORS.darkGreen,COLORS.lime]}
                onPress={()=>navigation.replace('Home')}
                >
              </CustomButtons>

            <CustomButtons 
                buttonText="Sign Up"
                colors={[]}
                onPress={()=>navigation.replace('Home')}
                 style={{paddingTop:10,}}>
            </CustomButtons>
            
            </View>
          </View>
        )
    }
    return (
        <View style={{
          flex:1,
          backgroundColor:COLORS.black,
        }}>
           <StatusBar barStyle='light-content'/>
          {/* Header Section*/}
          {renderHeader()}
          {/* Detail Section */}
          {renderDetail()}
        </View>
    )
}

export default Login;