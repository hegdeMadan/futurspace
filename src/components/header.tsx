import React, { ReactElement } from 'react';
import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { spaces, sizes } from '../theme';
import { Heading } from './Text';

type PropType = {
  text: string;
  rightText?: string;
  rightTextColor?: string;
  leftIconName?: string;
  iconSize?: number;
  LeftIcon?: ReactElement;
  RightIcon?: ReactElement;
  rightIconName?: string;
  styleProps?: object;
  iconColor?: string;
  onClick?: Function;
  onClickRight?:Function;
  textAlign?: 'flex-end' | 'flex-start' | 'center';
}

const Header = ({
  text,
  rightText,
  rightTextColor,
  LeftIcon,
  RightIcon,
  leftIconName,
  rightIconName,
  styleProps,
  iconColor,
  onClick,
  onClickRight,
  iconSize,
  textAlign,
}: PropType) => (
  <View style={{ ...styles.wrapper, ...styleProps }}>
    {leftIconName ? (
      <TouchableOpacity onPress={() => (onClick ? onClick() : null)}>
        <View
          style={{
            ...styles.iconContainer,
            minWidth: moderateScale(spaces.width.header),
          }}
        >
          <Icon
            name={leftIconName}
            size={moderateScale(iconSize || 28)}
            style={{ ...styles.icon, color: iconColor }}
          />
          {LeftIcon ? (
            <LeftIcon style={{ ...styles.icon }} />
          ) : null}
        </View>
      </TouchableOpacity>
    ) : (
      <View
        style={{
          height: '100%',
          minWidth: moderateScale(spaces.width.header),
          justifyContent: 'center',
        }}
      />
    )}

    <View style={{ justifyContent: 'center', width: 'auto', alignItems: textAlign || 'center' }}>
      <Heading variant="subHeading" text={text} style={styles.text} />
    </View>

    {rightIconName || RightIcon || rightText ? (
      <TouchableOpacity onPress={() => (onClickRight ? onClickRight() : null)}>
        <View
          style={{
            ...styles.iconContainer,
            minWidth: moderateScale(spaces.width.header),
          }}
        >
          {RightIcon ? (
            <RightIcon style={{ ...styles.icon }} />
          ) : null}

          { rightIconName
            ? (
              <Icon
                name={rightIconName}
                size={moderateScale(iconSize || 28)}
                style={{ ...styles.icon, color: iconColor }}
              />
            )
            : null
          }
          { rightText
            ? (
              <Heading
                variant="heading3"
                text={rightText}
                style={{
                  ...styles.text,
                  textAlign: 'center',
                  padding: moderateScale(spaces.padding.headerElements),
                }}
                color={rightTextColor}
              />
            ) : null
          }
        </View>
      </TouchableOpacity>
    ) : (
      <View
        style={{
          height: moderateScale(spaces.height.header),
          width: moderateScale(spaces.width.header),
        }}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: moderateScale(spaces.height.header),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    zIndex: 1,
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Header;
