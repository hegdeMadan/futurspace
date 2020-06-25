import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { screens } from '../../navigator/constants';

export const Messages = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      }}>
      <Text> Welcome to Messages! </Text>
      <Button
        title="Go to messages"
        onPress={() => navigation.navigate(screens.inbox)}
      />
    </View>
  );
};
