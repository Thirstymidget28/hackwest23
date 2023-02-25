import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

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
}) => (
  <View style={{flex: 1}}>
    <View style= {{flex: 1/8, backgroundColor: 'red'}}>
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
    textAlign: 'center',
    marginTop: 45,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default mainMenuLayout;
