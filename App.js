import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet, Pressable} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


 const vStack = createNativeStackNavigator();

 const viewStack = () => {
    return (
      <NavigationContainer>
          <vStack.Navigator>
              <vStack.Screen 
                  name = "Home"
                  component = {HomeLayout}
                  options = {{headerShown: false}}
              />
              <vStack.Screen
                  name = "Filters"
                  component = {FilterLayout}
                  options = {{headerShown: false}}
              />
          </vStack.Navigator>
      </NavigationContainer>
    )
 }



 function SetBlackList(){
  return ['hotdog'];
 }

 /*function Food(left, right){
  return;
 }
 */
 /*ButtonLayout=(list)=>{
  let left = list[1];
  let right = list[1];
  return(<View style = {styles.containerImg}>
    <View style = {styles.buttonContainerImg}>
      <TouchableOpacity
        activeOpacity = {0.50}>
        <Image
          style = {[styles.foodImg1, {zIndex:1}]}
          source = {left}/>
      </TouchableOpacity>
      </View>
      <View style ={styles.buttonContainerImg}>
      <TouchableOpacity
        activeOpacity = {0.50}>
        <Image
          style = {[styles.foodImg2, {zIndex:1}]}
        source = {right}/>
      </TouchableOpacity>
      </View>
    </View>);
 }
*/
const HomeLayout = ({navigation}) => {
  const onPress = () => navigation.navigate('Filters');
  let allFood = [['pizza', require('./assets/Pizza.png')], ['hotdog', require('./assets/Hotdog.png')], ['sushi', require('./assets/Sushi.png')], ['ramen', require('./assets/Ramen.png')], ['burger', require('./assets/Burger.png')], ['fried chicken', require('./assets/FriedChicken.png')]]
  let blackListed = SetBlackList();
  let foodList = [];

  for(let i = 0; i< blackListed.length; i++){
    for(let j = 0; j < allFood.length; j++){
      if(allFood[j][1]!=blackListed[i]){
        foodList.push(allFood[j]);
      }
    }
  }
  //ButtonLayout(foodList);
  /*let rows = foodList.length/2;
  if (foodList.length %2 !=0){
    foodList.push([ , ]);
    rows+=1
  }
  let pos = 0;
  for(let i = 0; i<rows; i++){
    Food(foodList[pos][1], foodList[pos+1][1]);
    pos+=2;
  }
  */
  
  return (
  <View style={[styles.container, {flexDirection: 'column'},]}>
    <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
      <TouchableOpacity style={[styles.filter, {zIndex: 1}]} onPress={onPress}>
        <Image style={[styles.smallImg, {zIndex: 2}]}
        source = {require('./assets/gear_icon.png')}/>
      </TouchableOpacity>
      <Text style={styles.label}>{"Food Finder"}</Text>
  
    </View>
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
  
  
    <View style= {{flex: 1, backgroundColor: 'lightgrey'}}>
    
    <View style = {styles.buttonContainer2}>
    <View style = {styles.buttonContainer3}>
      <TouchableOpacity style = {[styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
          <Image
            style = {[styles.foodImg, {zIndex:1}]}
            source = {allFood[0][1]}/>
      </TouchableOpacity>
      </View>
      <View style ={styles.buttonContainer3}>
      <TouchableOpacity style = {[styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[styles.foodImg, {zIndex:1}]}
        source = {allFood[1][1]}/>
      </TouchableOpacity>
      </View>
    </View>

    <View style = {styles.buttonContainer2}>
    <View style = {styles.buttonContainer3}>
      <TouchableOpacity style = {[styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[styles.foodImg, {zIndex:1}]}
          source = {allFood[2][1]}/>
      </TouchableOpacity>
      </View>
      <View style ={styles.buttonContainer3}>
      <TouchableOpacity style = {[styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[styles.foodImg, {zIndex:1}]}
        source = {allFood[3][1]}/>
      </TouchableOpacity>
      </View>
    </View>

    <View style = {styles.buttonContainer2}>
    <View style = {styles.buttonContainer3}>
      <TouchableOpacity style = {[styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[styles.foodImg, {zIndex:1}]}
          source = {allFood[4][1]}/>
      </TouchableOpacity>
      </View>
      <View style ={styles.buttonContainer3}>
      <TouchableOpacity style = {[styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[styles.foodImg, {zIndex:1}]}
        source = {allFood[5][1]}/>
      </TouchableOpacity>
      </View>
    </View>
    
    </View>
  
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    <View style= {{flex: 1/16, backgroundColor: 'lightblue'}} />
  </View>);
}



const FilterLayout = ({navigation}) => {
  const onPress = () => navigation.navigate('Home');

  return (
    <View style={[styles.container, {flexDirection: 'column'},]}>
      <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
        <TouchableOpacity style={[styles.chevron, {zIndex: 1}]} onPress={onPress}>
          <Image style={[styles.smallImg, {transform: [{scaleX:-1}], zIndex: 2}]}
          source = {require('./assets/chevron_icon.png')}/>
        </TouchableOpacity>
        <Text style={styles.label}>{"Filters"}</Text>

      </View>
      <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    
    
      <View style= {{flex: 1, backgroundColor: 'lightgrey'}}>
        
      </View>
  
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    <View style= {{flex: 1/16, backgroundColor: 'lightblue'}} />
  </View>
  );
}

// Style sheet dictates general properties of items
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginTop: -35,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  filter: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop:50,
    width: 35,
    height: 35,
  },
  smallImg: {
    width: 30,
    height: 30,
  },
  foodImg:{
    width: 175,
    height: 175,
  },
  chevron: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 50,
    width: 35,
    height: 35,
  },
  buttonContainer3:{
    flex: 13/18,
  },
  buttonContainer2:{
    flex: 15/8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer1:{
    width: 320,
    height: 68,
    color: '#d2d1f0',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 10,
    width: '100%', 
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    color: '#d2d1f0',
    fontSize: 16,
  },
  /*buttonPizzaStyle:{
    flexDirection: 'row',
    alignItems: 'Left',
    backgroundColor:'#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  }*/
  spaceImg:{
    margin:10,
  }
});

export default viewStack;