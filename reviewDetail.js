import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {globalStyle, images} from './globalStyle';
import Card from '../shareComponent/card';

export default function ReviewDetail({navigation}) {
            const rating = navigation.getParam('rate');
              // console.log(rating)
          return (
            <View style={globalStyle.container}>
              <Card>
              <Text style={globalStyle.title}>{navigation.getParam('title')}</Text>
              <Text style={globalStyle.title}>{navigation.getParam('body')}</Text>
                <View style={styles.Image}>
                    <View style={styles.rating}>
                      <Text>BOOK RATING: </Text>
                  <Image source={images.ratings[rating]} />
                    </View>
                </View>
              </Card>
            </View>
          );
        }


        const styles = StyleSheet.create({
          rating: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 16,
            marginTop: 16,
            borderTopColor: '#eee',
            borderTopWidth: 1
          }
        })