import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale } from 'react-native-size-matters'
import { sizes, colors } from '../theme'

export const HomeIcon = (props) => {
  if (props.focused) {
    return (
      <CommunityIcons
        name="home-variant"
        size={moderateScale(sizes.tabIcon)}
        color={colors.tabIconFocused}
      />
    )
  }

  return (
    <CommunityIcons
      name="home-variant-outline"
      size={moderateScale(sizes.tabIcon)}
      color={colors.tabIconUnFocused}
    />
  )
}


export const MessagesIcon = props => {
  if (props.focused) {
    return (
      <CommunityIcons
        name="message-text"
        size={moderateScale(sizes.tabIcon)}
        color={colors.tabIconFocused}
      />
    )
  }

  return (
    <CommunityIcons
      name="message-text-outline"
      size={moderateScale(sizes.tabIcon)}
      color={colors.tabIconUnFocused}
    />
  )
}


export const FriendsIcon = props => {
  if (props.focused) {
    return (
      <MaterialIcons
        name="people"
        size={moderateScale(sizes.tabIcon)}
        color={colors.tabIconFocused}
      />
    )
  }

  return (
    <MaterialIcons
      name="people-outline"
      size={moderateScale(sizes.tabIcon)}
      color={colors.tabIconUnFocused}
    />
  )
}

export const NotficationIcon = props => {
  if (props.focused) {
    return (
      <MaterialIcons
        name="notifications"
        size={moderateScale(sizes.tabIcon)}
        color={colors.tabIconFocused}
      />
    )
  }

  return (
    <MaterialIcons
      name="notifications-none"
      size={moderateScale(sizes.tabIcon)}
      color={colors.tabIconUnFocused}
    />
  )
}

export const CreateIcon = props => {
  if (props.focused) {
    return (
      <MaterialIcons
        name="add-circle"
        size={moderateScale(sizes.tabIcon)}
        color={colors.tabIconFocused}
      />
    )
  }

  return (
    <MaterialIcons
      name="add-circle-outline"
      size={moderateScale(sizes.tabIcon)}
      color={colors.tabIconUnFocused}
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
  