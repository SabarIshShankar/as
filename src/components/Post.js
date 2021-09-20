import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import{useNavigation, useTheme, useRoute} from '@react-navigation/native'
import moment from 'moment'

import axios from '../utils/fetcher'
import {AuthContext} from '../context/authContext'

import {ArrowDown, ArrowUp, MessageSquare, Trash} from './icons/index'

const Post = ({
  index, postId, userId, score, type, title, author, category, text, comments, created, url, votes, views, setIsLoading, setData, postType, deleteButton, deletePost
}) => {
  const {colors} = useTheme()
  const navigation = useNavigation()
  const {authState} = React.useContext(AuthContext)
  const route = useRoute()

  const isUpVoted = () => {
    return votes.find(v => v.user === userId)?.vote === 1
  }

  const isDownVotes = () => {
    return votes.find(v => v.user === userId)?.vote === -1
  }
  const upVote = async() => {
    setIsLoading(true)
    const {data} = await axios.get(`post/${postId}/upvote`)
    if(postType !== 'item'){
      setData(prevData => {
        prevData[index] = data
        return prevData
      })
    } else {
      setData(data)
    }
    setIsLoading
  }

  const downVote = async() => {
    setIsLoading(true)
    const{data} = await axios.get(`post/${postId}/downvote`)
    if (postType !== 'item'){
      setData(prevData => {
        prevData[index] = data
        return prevData
      })
    } else {
      setData(data)
    }
    setIsLoading(false)
  }

  const unVote = async() => {
    setIsLoading(true)
    const {data} = await axios.get(`post/${postId}/unvote`)
    if(postType !== 'item'){
      setData(prevData => {
        prevData[index] = data
        return prevData
      })
    } else {
      setData(data)
    }
    setIsLoading(false)
  }


  return(
    <View>
        
    </View>
  )
}









