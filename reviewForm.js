import React from 'react';
import { Button, TextInput, View, } from 'react-native';
import { globalStyle } from './globalStyle';
import { Formik } from 'formik';

export default function ReviewForm() {
          return(
                    <View style={globalStyle.container}>

                    <Formik
                    initialValues={{title: '', body: '', rate: ''}}
                    onSubmit={(values) => {
                              console.log(values)
                    } }
                    >
                              {(formikProps) => (
                              <View>
                              {/* console.log(formikProps) */}

                              <TextInput 
                              style={globalStyle.input}
                              placeholder='Review Title'
                              onChangeText={formikProps.handleChange('title') }
                              value={formikProps.values.title}
                              />
                              <TextInput 
                              style={globalStyle.input}
                              placeholder='Review Body'
                              onChangeText={formikProps.handleChange('body') }
                              value={formikProps.values.body}
                              />
                              <TextInput 
                              style={globalStyle.input}
                              placeholder='Rating (1-5)'
                              onChangeText={formikProps.handleChange('rate') }
                              value={formikProps.values.rate}
                              keyboardType='numeric'
                              />

                              <Button title='Submit' color='maroon' onPress={formikProps.handleSubmit} />
                              </View>


                              )}
                    </Formik>
                    </View>
          )
}