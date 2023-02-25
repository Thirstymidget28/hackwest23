import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

const mainMenuLayout = () => {
  return ( // Create a Flex space that can be filled with UI elements.
    <PreviewLayout
        label = "Food Finder"

        // Draw main layout
        style={[styles.container, {flexDirection: 'column'},]}>
    </PreviewLayout>
  );
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{flex: 1}}>
    <View style= {{flex: 1/8, backgroundColor: 'red'}}>
      <TouchableOpacity style={[styles.filter, {zIndex: 1}]}>
        <Image style={[styles.gearImg, {zIndex: 2}]}
        source = {require('./assets/gear-icon.png')}/>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>

    </View>
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    
    
    <View style= {{flex: 1, backgroundColor: 'lightgrey'}}>
        {/* ALL MAIN MENU BUTTONS / ITEMS INSIDE THIS VIEW 
              - Create menu options
              - Create buttons
        */}
        
    </View>
   
   
    <View style= {{flex: 1/200, backgroundColor: 'black'}} />
    <View style= {{flex: 1/16, backgroundColor: 'red'}} />
  </View>
);

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
  gearImg: {
    width: 30,
    height: 30,
  }
});

export default mainMenuLayout;
