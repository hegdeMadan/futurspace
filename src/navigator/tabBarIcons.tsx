import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcons from 'react-native-vector-icons/AntDesign'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { moderateScale } from 'react-native-size-matters'
import { sizes, colors } from '../theme'

type IconPropTypes = {
  focused: boolean;
}

export const HomeIcon = (props: IconPropTypes) => {
  return (
    <CommunityIcons
      name={props.focused ? "home-variant" : 'home-variant-outline'}
      size={moderateScale(sizes.tabIcon)}
      color={props.focused ? colors.tabIconFocused : colors.tabIcon}
    />
  )
} 


export const MessagesIcon = (props: IconPropTypes) => {
  return (
    <CommunityIcons
      name={props.focused ? "message-text" : 'message-text-outline'}
      size={moderateScale(sizes.tabIcon)}
      color={props.focused ? colors.tabIconFocused : colors.tabIcon}
    />
  )
}


export const FriendsIcon = (props: IconPropTypes) => {
  return (
    <MaterialIcons
      name={props.focused ? "people" : 'people-outline'}
      size={moderateScale(sizes.tabIcon)}
      color={props.focused ? colors.tabIconFocused : colors.tabIcon}
    />
  )
}

export const NotficationIcon = (props: IconPropTypes) => {
  return (
    <MaterialIcons
      name={props.focused ? "notifications" : 'notifications-none'}
      size={moderateScale(sizes.tabIcon)}
      color={props.focused ? colors.tabIconFocused : colors.tabIcon}
    />
  )
}

export const CreateIcon = (props: IconPropTypes) => {
  return (
    <MaterialIcons
      name={props.focused ? "add-circle" : 'add-circle-outline'}
      size={moderateScale(sizes.tabIcon)}
      color={props.focused ? colors.tabIconFocused : colors.tabIcon}
    />
  )
}

export const ProfileIcon = props => {
  return (
    <MaterialIcons
      name="person"
      size={moderateScale(sizes.tabIcon)}
      color={props.color}
    />
  )
}

export const DiscoverIcon = props => {
  return (
    <MaterialIcons
      name="explore"
      size={moderateScale(sizes.tabIcon)}
      color={props.color}
    />
  )
}

export const AddStoryIcon = props => {
  return (
    <MaterialIcons
      name="add-circle"
      size={moderateScale(sizes.tabIcon)}
      color={props.color}
    />
  )
}
  