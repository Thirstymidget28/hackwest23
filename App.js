import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

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
      {
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, {zIndex:1}]} onPress = {() => alert('You pressed a button')}>
            <Text style = {styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>  

      }
      
    </View>
 
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    <View style= {{flex: 1/16, backgroundColor: 'lightblue'}} />
  </View>
  );
}

const FilterLayout = ({navigation}) => {
  const onPress = () => navigation.navigate('Home');

  return (
    <View style={[styles.container, {flexDirection: 'column'},]}>
      <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
        <TouchableOpacity style={[styles.chevron, {zIndex: 1}]} onPress={onPress}>
          <Image style={[styles.smallImg, {transform: [{scaleX:-1}], zIndex: 2}]}
          source = {require('./assets/chevron-icon.png')}/>
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
  chevron: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 50,
    width: 35,
    height: 35,
  },
  buttonContainer:{
    width: 320,
    height: 68,
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
    color: '#fff',
    fontSize: 16,
  },
});

export default viewStack;
