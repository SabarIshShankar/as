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
    
  )
}





