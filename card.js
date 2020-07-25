import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default function card(props){
          return(
                    <View style={styles.Card}>
                              <View style={styles.cardContent}>
                                        {props.children}
                              </View>
                    </View>
          )
}


const styles = StyleSheet.create({
          Card: {
                    borderRadius: 6,
                    elevation: 3,
                    shadowColor: '#333',
                    shadowOpacity: 0.5,
                    backgroundColor: '#fff',
                    shadowRadius: 2,
                    shadowOffset: {width: 2, height: 2},
                    marginHorizontal: 4,
                    marginVertical: 6
          },
          cardContent: {
                    marginVertical: 10,
                    marginHorizontal: 20
          }
})