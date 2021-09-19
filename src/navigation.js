import * as React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NaviagtionContainer} from '@react-navigation/native'
import {
  createStackNavigator, TransitionPresets, CardStyledInterpolators
} from '@react-navigation/stack';

import {ThemeContext} from './context/themeSwitchContext';
import DefaultTheme from './constants/default-theme';
import DarkTheme from './constants/dark-theme';

import TabBar from './components/TabBar';
import HomeScreen from './views/Home';