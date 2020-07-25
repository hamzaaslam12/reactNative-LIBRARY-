import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about'

import Header from '../shareComponent/header';
import React from 'react';

const screens = {
          About: {
                    screen: About,
                    navigationOptions: ({navigation}) => {
                              return{
                                         headerTitle: () => <Header  navigation={navigation} title= 'About Screen'/>
                                        
                                        }
                    }   
          }
}
const AboutStack = createStackNavigator(screens, {
          defaultNavigationOptions: {
                    headerTintColor: 'red',
                    headerStyle: {backgroundColor: '#eee', height: 60}
          }
});

export default AboutStack;