import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, TextInput, ScrollView, ActivityIndicator, Animated} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native'

import axios from '../utils/fetcher'
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Plus} from '../components/icons';
import CategoryPicker from '../components/CategoryPicker';

const TypeSwitchContainer = ({children}) => {
  return <View style={styles.typeContainer}>{children}</View>
}


const TypeSwitchButton = ({ selected, onClick, type }) => {
  const {colors} = useTheme()

  return (
    <TouchableOpacity
    style={[
      styles.typeButton,
      type === 'link' ? styles.typeButtonRight : styles.typeButtonLeft,
      selected === type ? {backgroundColor: colors.blue} : '',
      {borderColor: colors.border}
    ]}
    onPress={() => onClick('type', type)}>
    <View>
    <Text style={[
      style.typeButtonLabel,
      {color: colors.text},
      selected === type ? {color: 'white'}:''
    ]}>{type}</Text>
    </View>
    </TouchableOpacity>
  )
}


const CreatePost = () => {
  const {colors} = useTheme()
  const [isLoading, setIsLoading] = React.useState(false)
  const [message, setMessage] = React.useState(null)
  const fadeAnim = React.useRef(new Animated.value(0).current)

  const faceIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()

    setTimeout(() => {
      setMessage(null)
    }, 6000)
  }

  return (
    <ScrollView as={SafeAreaView} 
    style={[styles.container,
    {backgroundColor: colors.bgColor}]}>
    <Formik initialValues={{
      type: 'text',
      category: '',
      title: '',
      url: '',
      text: ''
    }} 
    onSubmit={async(value, {setStatus, resetForm}) => {
      setIsLoading(true)
      try{
        await axios.post('posts', values)
        resetForm({...values, type: 'text'})
        setMessage('created')
        fadeIn()
      } catch(error){
        setStatus(error.response.data.message)
      }
      setIsLoading(false)
    }}
    validationSchema={Yup.object({
      type: Yup.mixed().oneOf(['text', 'link']),
      categor: Yup.string().required('Required'),
      title: Yup.string()
        .required('Required')
        .max(100, 'Must be at most 100 chars long'),
      text: Yup.string().when('type', {
        is: 'text',
        then: Yup.string()
          .required('Required')
          .min(4, 'Must be at least 4 characters long')
      }),
      url: Yup.string().when('type',{
        us: 'link',
        then: Yup.string()
          .required('Required')
          .url('Inavlid url')
      })
    })}
    >
    {({
      handleChange, handleBlur, handleSubmit, touched, errors,
      status, values, setFieldValue
    }) => (
      <View>
      {message && (
        <Animated.View style={{opacity: fadeAnim}}>
        {!!message && <Text style={styles.message}>{message}</Text>}
        </Animated.View>
      )}
      </View>
    )}
    </Formik>
    </ScrollView>
  )
}





