import React, {useState} from 'react';

import {View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, Animated, PanResponder} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SelectList, MultipleSelectList} from 'react-native-dropdown-select-list';

// Obtaining phone dimensions to improve display on different size screens
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const vStack = createNativeStackNavigator()

// Food Image List
const finderFoods = [
  {id: "1", uri: require("./assets/french-toast.png")},
  {id: "2", uri: require("./assets/salmon.png")},
  {id: "3", uri: require("./assets/steak.png")},
  {id: "4", uri: require("./assets/tasty-za.png")},
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
      const onPress = () => navigation.navigate('Filters');
    let allFood = [['pizza', require('./assets/Pizza.png')], ['hotdog', require('./assets/Hotdog.png')], ['sushi', require('./assets/Sushi.png')], ['ramen', require('./assets/Ramen.png')], ['burger', require('./assets/Burger.png')], ['fried chicken', require('./assets/FriedChicken.png')]]
    let blackListed = SetBlackList = () => [];
    let foodList = [];

    for(let i = 0; i< blackListed.length; i++){
      for(let j = 0; j < allFood.length; j++){
        if(allFood[j][1]!=blackListed[i]){
          foodList.push(allFood[j]);
        }
      }
    }
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
        <View style = {this.styles.buttonContainer2}>
    <View style = {this.styles.buttonContainer3}>
      <TouchableOpacity style = {[this.styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
          <Image
            style = {[this.styles.foodImg, {zIndex:1}]}
            source = {allFood[0][1]}/>
      </TouchableOpacity>
      </View>
      <View style ={this.styles.buttonContainer3}>
      <TouchableOpacity style = {[this.styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[this.styles.foodImg, {zIndex:1}]}
        source = {allFood[1][1]}/>
      </TouchableOpacity>
      </View>
    </View>

    <View style = {this.styles.buttonContainer2}>
    <View style = {this.styles.buttonContainer3}>
      <TouchableOpacity style = {[this.styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[this.styles.foodImg, {zIndex:1}]}
          source = {allFood[2][1]}/>
      </TouchableOpacity>
      </View>
      <View style ={this.styles.buttonContainer3}>
      <TouchableOpacity style = {[this.styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[this.styles.foodImg, {zIndex:1}]}
        source = {allFood[3][1]}/>
      </TouchableOpacity>
      </View>
    </View>

    <View style = {this.styles.buttonContainer2}>
    <View style = {this.styles.buttonContainer3}>
      <TouchableOpacity style = {[this.styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[this.styles.foodImg, {zIndex:1}]}
          source = {allFood[4][1]}/>
      </TouchableOpacity>
      </View>
      <View style ={this.styles.buttonContainer3}>
      <TouchableOpacity style = {[this.styles.button, {zIndex:1}]}
        activeOpacity = {0.50}>
        <Image
          style = {[this.styles.foodImg, {zIndex:1}]}
        source = {allFood[5][1]}/>
      </TouchableOpacity>
      </View>
    </View>

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
      <View style={[this.styles.container, {flexDirection: 'column'},]}>
        <View style= {{flex: 1/8, backgroundColor: 'lightblue'}}>
          <TouchableOpacity style={[this.styles.chevron, {zIndex: 1}]} onPress={() => navigation.navigate('Home')}>
            <Image style={[this.styles.smallImg, {transform: [{scaleX:-1}], zIndex: 2}]}
            source = {require('./assets/chevron-icon.png')}/>
          </TouchableOpacity>
          <Text style={this.styles.label}>{"Filters"}</Text>

        </View>
        <View style= {{flex: 1/200, backgroundColor: 'black'}} />
        <View style= {[this.styles.parentView,{flex: 1, backgroundColor: 'lightgrey'}]}>
          {/* FILTER BUTTONS AND SHIT HERE */}
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
    foodImg:{
    width: 175,
    height: 175,
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
    spaceImg:{
      margin:10,
      },
    random: {
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom:10,
      width: 50,
      height: 100
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
      },
    parentView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
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