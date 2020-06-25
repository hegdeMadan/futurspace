import * as React from 'react';
import {
  Text, View, PermissionsAndroid,
} from 'react-native';
import Contacts from 'react-native-contacts';
import { colors, sizes } from '../../theme';
import { Header } from '../../components';
import Icon from 'react-native-vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';

const Friends = () => {
  const [contacts, updateContacts] = React.useState([]);
  const [isUpdating, setUpdateState] = React.useState(true);

  const getAllContacts = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'We need to access your contacts',
        message: 'Need to read contacts',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    )
      .then(() => {
        Contacts.getAll((err, res) => {
          if (err === 'denied') {
            console.log('failed **********', err);
          } else {
            updateContacts([...res]);
            setUpdateState(false);
            console.log('contacts **********', res);
          }
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  React.useEffect(() => {
    if (contacts.length === 0) {
      getAllContacts();
    }
  });

  const rightIcon = ({ style }) => {
    return (
      <Icon
        name='settings'
        style={style}
        size={moderateScale(22)}
        color={colors.tabIconFocused}
      />
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Header
        text="People"
        RightIcon={rightIcon}
      />
      <View>
        { isUpdating ? (
          <Text> Loading... </Text>
        ) : (
          <Text> List of Frinds </Text>
        )}
      </View>
    </View>
  );
};

export default Friends;
