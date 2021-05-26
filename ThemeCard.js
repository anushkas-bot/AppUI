import React from 'react';
import {View, Text, Image} from 'react-native';
import {IMAGES} from './Images';
import {COLORS} from './Colors';

const ThemeCard = () => {
  return (
    <View
      style={{
        width: 100,
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: COLORS.BORDER,
      }}>
      <Image
        source={IMAGES.theme1}
        style={{
          width: 100,
          height: 100,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text style={{textAlign: 'center'}}>Theme1</Text>
    </View>
  );
};

export {ThemeCard};
