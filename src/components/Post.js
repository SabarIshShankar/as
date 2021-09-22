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

  const isDownVoted = () => {
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
        <View style={styles.headerRight}>
        {deleteButton && author?.id === authState.userInfo.id && (
          <TouchableOpacity style={styles.trash} activeOpacity={0.5}>
          <Trash color={colors.red} width={20} height={20}/>
          </TouchableOpacity>
        )}
        </View>
        </View>

        <Text style={[
          styles.title, {color: colors.text}
        ]} onPress={() => navigation.navigate('PostDetail', {postId, category, comments})}>{title}</Text>
        <Text numberOfLines = {route.name === 'PostDetail' ? 10000:10} style={[styles.regularFont, {
          color: colors.text
        },
        type==='link' && route.name === 'PostDetail' && styles.link]} 
        onPress={() =>
          route.name === 'PostDetail' && type==='link' ? Linking.openURL(url):navigation.navigate('PostDetail', {postId, category, comments})}>
        {type === 'link' ? url : text} </Text>

        <View style={styles.bottomContainer}>
        <View style={styles.centerAlign}>
        <TouchableOpacity onPress={() => (isUpVoted() ? unVote():upVote())}>
        <ArrowUp width={22} height={22} strokeWidth={4} color={isUpVoted() ? colors.green : colors.icon}/>
        </TouchableOpacity>


        <Text style={[styles.score, {color: colors.text}]}>{score}</Text>

        <TouchableOpacity onPress={() => (isDownVoted() ? unVote():downVote())}>
        <ArrowDown width={22}
        height={22} strokeWidth={4}
        color={isDownVoted() ? colors.red : colors.icon}
        />
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.centerAlign} activeOpacity={0.7} onPress={() => navigation.navigate('PostDetail', {postId, category, comments})}>
        <MessageSquare color={colors.icon}
        style={styles.commentIcon}
        width={20} height={20} strokeWidth={3}/>

        <Text style={[styles.commentText, {color: colors.text}]}>{comments?.length}</Text>
        </TouchableOpacity>
        <Text style={[styles.italicaFont, {color: colors.text}]}>{views} views</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginBottom: 7,
    elevation: 1,
    borderWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    fontSize: 13
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRight: {
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
  },
  centerAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 17.
  },
  commentIcon: {
    marginBottom: -3
  },
  commentText:{
    marginLeft: 3
  },
  dateText: {
    fontSize: 12
  },
  link:{
    color: '#0064bd',
  }
})
export default Post

















