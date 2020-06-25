import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from './constants';
import { Messages, Inbox } from '../dashboard/messages';
import { Home } from '../dashboard/home';
import { MessagesIcon,
  HomeIcon,
  FriendsIcon,
  NotficationIcon,
  CreateIcon
} from './tabBarIcons';
import { spaces } from '../theme';
import Friends from '../dashboard/people/friends';
import { NotificatonList } from '../dashboard/Notificatons/notificationList';
import { CreatePost } from '../dashboard/create/createPost';

const Stack = createStackNavigator();
const messagesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={screens.messages}
      headerMode='none'
    >
      <Stack.Screen name={screens.messages} component={Messages} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={screens.home}
      tabBarOptions={{
        showLabel: false,
        style: {
          height: spaces.tabBar
        }
      }}
    >
      <Tab.Screen
        name={screens.home}
        component={Home}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />

      <Tab.Screen
        name={screens.friends}
        component={Friends}
        options={{
          tabBarIcon: FriendsIcon
        }}
      />

      <Tab.Screen
        name={screens.creator}
        component={CreatePost}
        options={{
          tabBarIcon: CreateIcon
        }}
      />

      <Tab.Screen
        name={screens.notifications}
        component={NotificatonList}
        options={{
          tabBarIcon: NotficationIcon
        }}
      />

      <Tab.Screen
        name={screens.messages}
        component={messagesStack}
        options={{
          tabBarIcon: MessagesIcon
        }}
      />
    </Tab.Navigator>
  );
}

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />
      <Stack.Navigator
        initialRouteName={screens.dashboard}
        headerMode='none'
      >
        <Stack.Screen name={screens.dashboard} component={TabBar} />
        <Stack.Screen name={screens.inbox} component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
