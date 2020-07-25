import React from 'react';
import {View, Text } from 'react-native';
import {globalStyle} from './globalStyle';

export default function About() {
          return (
            <View style={globalStyle.container}>
              <Text style={globalStyle.title}>ABOUT SCREEN</Text>
            </View>
          );
        }