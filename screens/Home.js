import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    FlatList,
    TextInput,
} from 'react-native';
import {COLORS,FONTS,SIZES,icons,images,dummyData} from '../constants';
import CategoryCard from '../components/CategoryCard';
import TrendingCard from '../components/TrendingCard.js';

const Home = ({ navigation }) => {
  
  function renderHeader(){
     return(
       <View style={{
         flexDirection:'row',
         marginTop:20,
         marginHorizontal:SIZES.padding,
         alignItems:'center', 
         height:80,
       }}> 
          {/* Texts */}
          <View style={{flex:1}}>
              <Text style={{
                color:COLORS.darkGreen,
                ...FONTS.h2,
 
              }}
              >Hello Asim</Text>
              <Text style={{
                marginTop:3,
                color:COLORS.gray,
                ...FONTS.body3,
              }}> 
                What do you want to cook today?
              </Text>
          </View>
         
          {/* Image */}
          <TouchableOpacity onPress={()=>console.log('Profile')}>
            <Image
              source={{uri:'https://i.ibb.co/58DYjX6/AsimPost.jpg'}}
              style={{
                width:50,
                height:50,
                borderRadius:25,
              }}
            /> 
          
          </TouchableOpacity>
       </View>
     )
  }
 
  function renderSearchBar(){
    return(
      <View style={{
        flexDirection:'row',
        height:50,
        alignItems:'center',
        marginHorizontal:SIZES.padding,
        paddingHorizontal:SIZES.radius,
        borderRadius:10,
        backgroundColor:COLORS.lightGray,
      }}>
      {/* SearchIcon */}
      <Image
        source={icons.search}
        style={{
          width:20,
          height:20,
          tintColor:COLORS.gray, 
        }}
      />
      {/* TextInput */}
      <TextInput 
        style={{
         marginLeft:SIZES.radius,
         ...FONTS.body3,
        }}
        placeholderTextColor={COLORS.gray}
        placeholder='Search Recipes'
         
      />
      </View> 
    )
  } 

  function renderSeeRecipeCard(){
    return(
        <View
          style={{
            flexDirection:'row',
            marginHorizontal:SIZES.padding,
            borderRadius:10,
            backgroundColor:COLORS.lightGreen,
            marginTop:1,
        }}>
          {/* Image */}
          <View 
            style={{
              width:100,
              alignItems:'center',
              justifyContent:'center'
            }}>
            <Image
              source={images.recipe}
              style={{
                width:80,
                height:80,
              }}
            />
          </View>
          <View 
            style={{
              flex:1,
              paddingVertical:SIZES.radius,
            }}
          >
            <Text
              style={{
                width:'70%',
                ...FONTS.body4,
              }}
            >You have 12 recipes that you haven't tried yet</Text>
            <TouchableOpacity
             style={{
             }}
             onPress={()=>{console.log('Recipies')}}
            >
              <Text
                style={{
                  color:COLORS.darkGreen,
                  textDecorationLine:'underline',
                  ...FONTS.h4,
                }}
              >See Recipes</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
  }

  function renderTrendingSection(){
    return(
      <View style={{
       marginTop:10,
      }}>
      <Text style={{
        marginHorizontal:SIZES.padding,
        ...FONTS.h2,
        fontWeight:'bold',
      }}> Trending Recipe
      </Text>

      <FlatList
        data={dummyData.trendingRecipes}
        horizontal
        showsVerticalScrollIndicator={false}
        keyExtractor={item=>`${item.id}`}
        renderItem={({item,index})=>{
          return(
            <TrendingCard 
               containerStyle={{
                 marginLeft:index==0 ? SIZES.padding:0,
               }}
               recipeItem={item}
               onPress={()=>{ navigation.navigate("Recipe",{recipe:item})}}
            />
          )
        }}
      />
    </View>
    )
  }


  function BottomTabs(){
    return(
    <View 
       style={{flexDirection:'row',justifyContent:'space-around',marginBottom:5,height:40}}
    >
    <TouchableOpacity
      onPress={()=>console.log('Home') }
    >
      <Image 
         source={require('../assets/icons/home.png')}
         style={{
           width:35,
           height:35,
         }}
          
      />
    </TouchableOpacity>
    <TouchableOpacity
       onPress={console.log('Search')}
    >
      <Image 
         source={require('../assets/icons/search.png')} 
         style={{
           width:35,
           height:35,
         }}
          
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>console.log('NewPost') }
    >
      <Image 
        source={require('../assets/icons/bookmark.png')}
         style={{
           width:35,
           height:35,
         }}
          
      />
      </TouchableOpacity>
      <TouchableOpacity
         onPress={()=>console.log('settings')}
      >
      
       <Image 
         source={require('../assets/icons/settings.png')}
         style={{
           width:35,
           height:35,
           borderRadius:17,
         }}
          
        />
      </TouchableOpacity>
      
    </View>
  )
  }


  function renderCategoryHeader() {
    return(
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
        marginHorizontal:SIZES.padding,
      }}>
        {/* Section Title */}
        <Text style={{
          flex:1,
          ...FONTS.h2,
        }}>Categories
        </Text>
        
        {/* View All */}
        <TouchableOpacity>
           <Text style={{
             color:COLORS.gray,
             ...FONTS.body4,
             textDecorationLine:'underline',
           }}>View All
           </Text>
        </TouchableOpacity>
      </View>
    )
  }


    return (
       
      <SafeAreaView style={{
        flex:1,
        backgroundColor:'white',
      }}>
        <FlatList
          data={dummyData.categories}
          keyExtractor={item=> `${item.id}`}
          keyboardDismissMode="on-drag"  
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View>
            {/* Header */}
            {renderHeader()}

            {/* SearchBar */}
            {renderSearchBar()}

            {/* seeRecipeCard */}
            {renderSeeRecipeCard()}

            {/* Trending Section */}
            {renderTrendingSection()}

            {/* CategoryHeader */}
            {renderCategoryHeader()}
            </View>
          } 
          renderItem={({item})=>{
            return(
                <CategoryCard
                 containerStyle={{
                  marginHorizontal:SIZES.padding,
                 }}
                 categoryItem={item} 
                 onPress={()=>navigation.navigate("Recipe",{recipe:item})}
                />   
            )    
          }}  
          ListFooterComponent={
            <View
               style={{
                 marginBottom:50,
               }}
            />  
          } 
        />  
        <BottomTabs/>
      </SafeAreaView>
    )  
}
export default Home;