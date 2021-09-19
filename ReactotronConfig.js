import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorage(AsyncStorage)
  .configure()
  .useReactNative()
  .connect()