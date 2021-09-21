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
    <View as={SafeAreaView} style={[styles.container,
      {backgroundColor: colors.bgColor, borderColor: colors.postBorder}]}>
         <View styles={styles.headerContainer}>
         <View styles={styles.headerLeft}>
         <Text style={[styles.regularFont, {
           color: colors.text
         }]}>{category}</Text>
         <Text style={[{color: colors.blue}]}
         onPress={() => navigation.navigate('User', {username: author.username})}>@{author?.username}·{' '}</Text>
         <Text style={[styles.dateText, {color: colors.text}]}>{moment(created).fromNow()}</Text>
         </View>
         </View>
     </View>
  )
}









