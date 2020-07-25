import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetail from '../screens/reviewDetail'

import Header from '../shareComponent/header';
import React from 'react';

const screens = {
          Home: {
                    screen: Home,
                    navigationOptions: ({navigation}) => {
                              return{
                                         headerTitle: () => <Header  navigation={navigation} title='HOME SCREEN'/>
                                        
                                        }
                    }   
          },

          ReviewDetail: {
                    screen: ReviewDetail
          }
}
const RouteStack = createStackNavigator(screens, {
          defaultNavigationOptions: {
                    headerTintColor: 'red',
                    headerStyle: {backgroundColor: '#eee', height: 60}
          }
});

export default RouteStack