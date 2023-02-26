import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, Animated, PanResponder, Alert} from 'react-native';

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
                  component = {this.FilterLayout}
                  options = {{headerShown: false}}
              />
              <vStack.Screen
                // Tinder Screen
                  name = "Tinder"
                  component = {this.TinderLayout}
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
        <TouchableOpacity style={[this.styles.random, {zIndex: 1}]} onPress={() => navigation.navigate('Tinder')}>
          <Image style={[this.styles.medImg, {zIndex: 2}]}
          source = {require('./assets/dice-icon.png')}/>
        </TouchableOpacity>
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

// tinderLayout View, contains the 'tinder-like' swipe screen
  // menuLayout View, contains the 'menu' for the selected restaraunt
  TinderLayout = ({navigation}) => {

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
          {new swipeApp().FoodSwiper()}

        </View>
  
      <View style= {{flex: 1/200, backgroundColor: 'black'}} />
      <View style= {{flex: 1/16, backgroundColor: 'lightblue'}} />
    </View>
    );
  }

// menuLayout View, contains the 'menu' for the selected restaraunt
  MenuLayout = ({navigation}) => {

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
    random: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop:500,
      width: 50,
      height: 250
    },
    medImg: {
      width: 80,
      height: 100,
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

  // Render the viewStack Screens
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

      // Create property to allow the cards to be moved on screen
    this.position = new Animated.ValueXY();
      // Monitor state of card stack
    this.state = {
      currentState: 0,
      isMounted: false
    }

      // Calculate rotation of cards based on movement using interpolation
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })
      // Use this.rotate in combination with getTranslateTransform, this allows for rotation and transformation
    this.rotateAndTranslate={
      transform: [{rotate: this.rotate
    },
    ...this.position.getTranslateTransform()]
    }

      // Change opacity for like label
    this.likeOpac = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
      // Change opacity for nope label
    this.nopeOpac = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })
      // Change opacity for next card
    this.nextCardOpac= this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
      // Change scale of next card
    this.nextCardScale= this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH/2, 0, SCREEN_WIDTH/2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

      // Create PanResponder to handle card interactions
    this.PanResponder = PanResponder.create({
      // Default Position
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      // When being dragged
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy})
      },
      // When being released
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) { // If card passes action threshold (right)
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: true
          }).start(() => { // Start state transition
            if (this.state.isMounted) { // Check if the component is mounted before calling setState
              this.setState({
                currentState: this.state.currentState + 1
              }, () => this.position.setValue({ x: 0, y: 0 }));
            }
          });
        } else if (gestureState.dx < -120) { // If card passes action threshold (left)
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true
          }).start(() => { // Start state transition
            
            if (this.state.isMounted) { // Check if the component is mounted before calling setState
              this.setState({
                currentState: this.state.currentState + 1
              }, () => this.position.setValue({ x: 0, y: 0 }));
            }
          });
        } else { // The card didn't reach either action threshold so return it to the top of the stack
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4,
            useNativeDriver: false
          }).start();
        }
      }
    })
  }

  componentDidMount() {
    this.setState({ isMounted: true }); // Set the flag to true when the component is mounted
  }
  
  componentWillUnmount() {
    this.setState({ isMounted: false }); // Set the flag to false when the component is unmounted
  }
  
  // Card Stack Function
  FoodSwiper = () => {
    return finderFoods.map((item, i) => {
      if(i < this.state.currentState){ // If the card has already been swiped, don't show it.
        return null;
      } else if(i == this.state.currentState){ // If the card showing is the card that should be showing
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
    
            // Creating unique key to map image list.
            key={item.id}
            style={[this.rotateAndTranslate,
               {height: SCREEN_HEIGHT - 140,
               width: SCREEN_WIDTH,
               padding: 10,
               position: 'absolute',
            }]
          }>
            <Animated.View
              style={{
                opacity: this.likeOpac,
                transform: [{rotate: "-30deg"}],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1
              }}
              ><Text style={{ // LIKE STAMP
                borderWidth: 1,
                borderColor: "green",
                color: "green",
                fontSize: 32,
                fontWeight: "800",
                padding: 10
              }}> LIKE </Text>
              </Animated.View>
              
              <Animated.View
                style={{
                  opacity: this.nopeOpac,
                  transform: [{rotate: "30deg"}],
                  position: "absolute",
                  top: 50,
                  right: 40,
                  zIndex: 1
                }}>
                  <Text style={{ // NOPE STAMP
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10
                  }}> NOPE </Text>
                </Animated.View>
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
      } else { // Else if the card is beneath the top card
        return (
          <Animated.View
            key={item.id}
            style={{
              opacity: this.nextCardOpac,
              transform:[{scale: this.nextCardScale}],
              height: SCREEN_HEIGHT - 140,
              width: SCREEN_WIDTH,
              padding: 10,
              position: 'absolute',
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
    }).reverse(); //Reverse the card stack
  };
}