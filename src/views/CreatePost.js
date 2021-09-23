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
      {!!status&& <Text style={styles.status}>{status}</Text>}

      <View styles={styles.flexRow}>
      <Text style={[styles.formLabel, {color: colors.text}]}>Type</Text>
      {touched.type && errors.type && (
        <Text style={styles.errorMessage}>{errors.type}</Text>
      )}
      </View>

      <TypeSwitchContainer>
      <TypeSwitchButton selected={values.type} onClick={setFieldValue} type="text"/>
      <TypeSwitchButton selected={values.type} onClick={setFieldValue} type="link"/>
      </TypeSwitchContainer>

      <View style={styles.flexRow}>
      <Text style={[styles.formLabel, {color: colors.text}]}>Category</Text>
      {touched.category && errors.category && (
        <Text style={styles.errorMessage}>{errors.category}</Text>
      )}
      </View>

      <CategoryPicker selectedCategory={values.category} setFieldValue={setFieldValue}/>

      <View style={styles.flexRow}>
      <Text style={[styles.formLabel, { color: colors.text }]}>Title</Text>

      {touched.title && errors.title && (
        <Text style={styles.errorMessage}>{errors.title}</Text>
      )}
      </View>

      <TexInput style={[styles.textInput,
      {borderColor: colors.border, color: colors.text,
      height: 40},
      touched.title && errors.title && {borderColor: colors.red}]}
      value={values.title}
      onChangeText={handleChange('title')}
      onBlur={handleBlur('title')}
      />

      {values.type === 'link' ? (
        <>
        <View style={styles.flexRow}>
        <Text style={[styles.formLabel, {color: colors.text}]}>Url</Text>{touched.url && errors.url && (
          <Text style={styles.errorMessage}>{errors.url}</Text>
        )}
        </View>
        <TextInput
        style={[
          styles.textInput,
          {borderColor: colors.border, color: colors.text},
          touched.url && errors.url && {borderColor: colors.red}
        ]}
        multiline
        value={values.url}
        onChangeText={handleChange('url')}
        onBlur={handleBlur('url')}
        />
        </>
      ):(
        <>
        <View style={styles.flexRow}>
        <Text style={[styles.formLabel, {color: colors.text}]}>Text</Text>{
          touched.text && errors.text && (
            <Text style={styles.errorMessage}>{errors.text}</Text>
          )
        }
        </View>
        <TextInput style={[styles.textInput,
        {borderColor: colors.border, color: colors.text},
        touched.text && errors.text && {borderColor: colors.red}]}
        multiline
        value={values.text}
        
        onChangeText={handleChange('text')}
        onBlur={handleBlur('text')}
        />

        </>
      )}
      <View style={styles.buttonContainer}>
      <TouchableOpacity
      style={[styles.submitButton, {backgroundColor: colors.blue}]}
      onPress={handleSubmit}
      >
      {isLoading ? (
        <ActivityIndicator size="small" color=""white/>
      ): (
        <Plus color="white"/>
      )}
      <Text style={styles.submitButtonText}>Create Post</Text>
      </TouchableOpacity>
      </View>
      </View>
    )}
    </Formik>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  
})




