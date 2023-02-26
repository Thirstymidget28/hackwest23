import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, Animated, PanResponder} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Obtaining phone dimensions to improve display on different size screens
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const vStack = createNativeStackNavigator()

// Food Image List
const finderFoods = [
  {id: "1", uri: require("./assets/bbq.png")},
  {id: "2", uri: require("./assets/french-toast.png")},
  {id: "3", uri: require("./assets/salmon.png")},
  {id: "4", uri: require("./assets/steak.png")},
  {id: "5", uri: require("./assets/tasty-za.png")},
]

export default class App extends React.Component {
  // viewStack Object, contains the different routes between screens
  viewStack = () => {

    return (
      <NavigationContainer>
          <vStack.Navigator>
              <vStack.Screen 
                // Home Screen
                  name = "Home"
                  component = {this.HomeLayout}
                  options = {{headerShown: false}}
              />
              <vStack.Screen
                // Filter Screen
                  name = "Filters"
                  component = {new swipeApp().FoodSwiper}
                  options = {{headerShown: false}}
              />
          </vStack.Navigator>
      </NavigationContainer>
    )
}

// homeLayout View, contains the 'layout' for the homeScreen
  HomeLayout = ({navigation}) => {

    return(
        // Home Screen View
    <View style={[this.styles.container, {flexDirection: 'column'},]}>
      <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
        <TouchableOpacity style={[this.styles.filter, {zIndex: 1}]} onPress={() => navigation.navigate('Filters')}>
          <Image style={[this.styles.smallImg, {zIndex: 2}]}
          source = {require('./assets/gear-icon.png')}/>
        </TouchableOpacity>
        <Text style={this.styles.label}>{"Food Finder"}</Text>

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
  FilterLayout = ({navigation}) => {

    return (
      <View style={[this.styles.container, {flexDirection: 'column'},]}>
        <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
          <TouchableOpacity style={[this.styles.chevron, {zIndex: 1}]} onPress={() => navigation.navigate('Home')}>
            <Image style={[this.styles.smallImg, {transform: [{scaleX:-1}], zIndex: 2}]}
            source = {require('./assets/chevron-icon.png')}/>
          </TouchableOpacity>
          <Text style={this.styles.label}>{"Filters"}</Text>

        </View>
        <View style= {{flex: 1/200, backgroundColor: 'black'}} />
        <View style= {{flex: 1, backgroundColor: 'lightgrey'}}>
          {/* FILTER BUTTONS AND SHIT HERE */}

        </View>

      <View style= {{flex: 1/200, backgroundColor: 'black'}} />
      <View style= {{flex: 1/16, backgroundColor: 'lightblue'}} />
    </View>
    );
  }
// menuLayout View, contains the 'menu' for the selected restaraunt
  menuLayout = ({navigation}) => {

  return (
    <View style={[this.styles.container, {flexDirection: 'column'},]}>
      <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
        <TouchableOpacity style={[this.styles.chevron, {zIndex: 1}]} onPress={() => navigation.navigate('Home')}>
          <Image style={[this.styles.smallImg, {transform: [{scaleX:-1}], zIndex: 2}]}
          source = {require('./assets/chevron-icon.png')}/>
        </TouchableOpacity>
        <Text style={this.styles.label}>{"Food Finder"}</Text>

      </View>
      <View style= {{flex: 1/200, backgroundColor: 'black'}} />
      <View style= {{flex: 1, backgroundColor: 'lightgrey'}}>
        {/* SCROLLABLE RESTARAUNT MENU WITH REVIEWS */}

      </View>

    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    <View style= {{flex: 1/16, backgroundColor: 'lightblue'}} />
  </View>
  );
}

  // Style sheet dictates general properties of items
  styles = StyleSheet.create({
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
    }

    });

  render(){
    return(
      <View style={{ flex: 1 }}>
            {this.viewStack()}
      </View>
    )
  }
}

class swipeApp extends React.Component {

  constructor(){
    super();

    this.position = new Animated.ValueXY();
    this.state = {
      currentState: 0
    }

    this.PanResponder = PanResponder.create({
      // Default Position
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      // When being dragged
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy})
      },
      // When being released
      onPanResponderRelease: (evt, gestureState) => {}
    })
  }
  
  // Card Stack Function
  FoodSwiper = () => {
    return finderFoods.map((item, i) => {
      if(i < this.state.currentState){
        return null;
      }else if(i == this.state.currentIndex){
        return (
          <Animated.View
           {...this.PanResponder.panHandlers}
   
           // Creating unique key to map image list.
           key={item.id}
           style={[{transform: this.position.getTranslateTransform() },
              {height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              // Giving cards 'absolute' position to create stacking effect
              position: "absolute",
           }]
         }>
             {/* Drawing Image Cards */}
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={item.uri}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={i}
            style={{
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: "absolute"
            }}
          >
            <Image style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderRadius: 20
            }}
            source={item.uri}
            />
          </Animated.View>
        )
      }
    }).reverse();
  };
}