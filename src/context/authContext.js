import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage''

const AuthContext = React.createContext()
const {Provider} = AuthContext
const AuthProvider = ({children}) => {
  const [authState, setAuthState] = React.useState({})

  React.useEffect(() => {
    const bootstrapAsync = async() => {
      let token, expiresAt, userInfo
      try {
        token = await AsyncStorage.getItem('token')
        expiresAt = await AsyncStorage.getItem('expiresAt')
        userInfo = await AsyncStorage.getItem('userInfo')
      } catch(e) {
        console.log(e)
      }
      ig(new Date().getTime() / 1000 > JSON.parse(expiresAt)){
        signOut()
      }
      setAuthState({
        token, expiresAt, userInfo: userInfo ? JSON.parse(userInfo) : {}
      })
    }
    bootstrapAsync()
  }, [])



  
}