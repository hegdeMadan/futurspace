import * as React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../theme';

export const CreatePost = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
      }}>
      <Text> Create a post here </Text>
    </View>
  );
};
