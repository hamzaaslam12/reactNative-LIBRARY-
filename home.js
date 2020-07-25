import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { globalStyle } from './globalStyle';
import Card from '../shareComponent/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm'

export default function Home({ navigation }) {

  const [modalOpen, setModal] = useState(false)

  const [reviews, setReview] = useState([
    { title: 'THE KING', rate: 5, body: 'sifif kcnsdjfoij', key: '1' },
    { title: 'THE END OF EMPIRE', rate: 3, body: 'vcvx hjhmn', key: '2' },
    { title: 'THE SWORD', rate: 5, body: 'wqwe jkju', key: '3' },
    { title: 'IRON MAN', rate: 4, body: 'jklknv asxzxzx', key: '4' },
  ])
  // const pressHandler = () => {
  //           navigation.push('ReviewDetail')
  // }

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.title}>HOME SCREEN</Text>

      <MaterialIcons
        name='add'
        size={28}
        style={styles.modal}
        onPress={() => setModal(true)} />

      <Modal visible={modalOpen} animationType='slide'>
<View>

        <MaterialIcons
          name='close'
          size={28}
          style={styles.modal}
          onPress={() => setModal(false)} />

          <ReviewForm />

          </View>
      </Modal>


      <FlatList
        data={reviews}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => navigation.push('ReviewDetail', item)}>
            <Card>
              <Text>{item.title}</Text>
            </Card>

          </TouchableOpacity>
        )} />

    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
      marginBottom: 10,
      borderRadius: 10,
      borderColor: 'brown',
      padding: 10,
      alignSelf: 'center'
  }
})