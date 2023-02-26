import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list';
import {Slider} from '@react-native-community/slider';



 const vStack = createNativeStackNavigator();

// viewStack Object, contains the different routes between screens
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

 // homeLayout View, contains the 'layout' for the homeScreen
const HomeLayout = ({navigation}) => {
  const onPress = () => navigation.navigate('Filters');

  return(
      // Home Screen View
  <View style={[styles.container, {flexDirection: 'column'},]}>
    <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
      <TouchableOpacity style={[styles.filter, {zIndex: 1}]} onPress={onPress}>
        <Image style={[styles.smallImg, {zIndex: 2}]}
        source = {require('./assets/gear-icon.png')}/>
      </TouchableOpacity>
      <Text style={styles.label}>{"Food Finder"}</Text>

    </View>
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
  
  
    <View style= {{flex: 1, backgroundColor: 'lightgrey'}}>
      {/* ALL MAIN MENU BUTTONS / ITEMS INSIDE THIS VIEW 
              - Create menu options
              - Create buttons
      */}
      
    </View>
 
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    <View style= {{flex: 1/16, backgroundColor: 'lightblue'}} />
  </View>
  );
}

// filterLayout View, contains the 'filter' for the filterScreen
const FilterLayout = ({navigation}) => {
  const onPress = () => navigation.navigate('Home');
  const [category, setCategory] = React.useState("");
  const data=[
    {key: '1',value:"Select type of food you don't want"},
    {key: '2',value:'Chinese'},
    {key: '3',value:'Fried Chicken'},
    {key: '4',value:'Hot dog'},
    {key: '5',value:'Indian'},
    {key: '6',value:'Korean'},
    {key: '7',value:'Mexican'},
    {key: '8',value:'Pizza'},
    {key: '9',value:'Steak'},
    {key: '10',value:'Sushi'},
    {key: '11',value:'Taco'},
    {key: '12',value:'Thai'},
    {key: '13',value:'Vietnamese'},
    {key: '14',value:'Wings'},
  ]
  const data1=[
    {key: '1',value:'Select the distance '},
    {key: '2',value:'up to 5 miles'},
    {key: '3',value:'up to 10 miles'},
    {key: '4',value:'up to 15 miles'},
    {key: '5',value:'up to 20 miles'},
    {key: '6',value:'up to 25 miles'},
    {key: '7',value:'up to 30 miles'},
    {key: '8',value:'up to 35 miles'},
    {key: '9',value:'up to 40 miles'},
    {key: '10',value:'up to 45 miles'},
    {key: '11',value:'up to 50+ miles'},
  ]
  const data2=[
    {key: '1',value:'Select the price range'},
    {key: '2',value:'$'},
    {key: '3',value:'$$'},
    {key: '4',value:'$$$'},
  ]
  const data3=[
    {key: '1',value:'Select Your Rating Preference '},
    {key: '2',value:'1'},
    {key: '3',value:'2'},
    {key: '4',value:'3'},
    {key: '5',value:'4'},
    {key: '6',value:'5'},
  ]

  
  return (
    <View style={[styles.container, {flexDirection: 'column'},]}>
      <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
        <TouchableOpacity style={[styles.chevron, {zIndex: 1}]} onPress={onPress}>
          <Image style={[styles.smallImg, {transform: [{scaleX:-1}], zIndex: 2}]}
          source = {require('./assets/chevron-icon.png')}/>
        </TouchableOpacity>
        <Text style={styles.label}>{"Filters"}
        </Text>

      </View>
      <View style= {{flex: 1/200, backgroundColor: 'black'}} />
      <View style= {[styles.parentview,{flex: 1, backgroundColor: 'lightgrey'}]}>
      

      <Text>

      </Text>

        {/* FILTER BUTTONS */
        }
        {/* this can be changed from a single select list to a multiple select list*/}
        <MultipleSelectList 
        setSelected={setCategory} 
        boxStyles = {{marginTop: -80}}
        data={data} 
        defaultOptions={{key:'1', value: "Select type of food you don't want"}}
        save="value"
        label ="Categories"
        />
        <SelectList
        setSelected ={setCategory}
        boxStyles = {{marginTop: -50}}
        data ={data1}
        defaultOption={{key:'1', value: 'Select the distance'}}
        save ="value"
        label = "Categories"
        />
        <SelectList
        setSelected ={setCategory}
        boxStyles = {{marginTop: -20}}
        data ={data2}
        defaultOption={{key:'1', value: 'Select the Price Range'}}
        save ="value"
        label = "Categories"
        />
        <SelectList
        setSelected ={setCategory}
        boxStyles = {{marginTop: -10}}
        data ={data3}
        defaultOption={{key:'1', value: 'Select Your Rating Preference'}}
        save ="value"
        label = "Categories"
        />



    
    
        
        

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
  chevron: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 50,
    width: 35,
    height: 35,
  },
  slider_container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',

  }

});

// Default export
export default viewStack;