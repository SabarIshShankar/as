import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableWithoutFeeedback, KeyboardAvoidingView, ActivityIndicator
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import axios from '../utils/fetcher';
import {Formik} from 'formik';
import * as Yup from 'yup'
import Button from '../components/Button';
import {AuthContext} from '../context/authContext';