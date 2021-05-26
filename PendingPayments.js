import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import LinearGradient from 'react-native-linear-gradient'
import BookName from './BookName'

const Separator = () => (
  <View style={styles.separator}>
  <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.1%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
  </LinearGradient>
  </View>
);

export default function PendingPayments({navigation}) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('BookName')} style={{margin: 24, fontSize: 26, textAlign: 'center', marginLeft: -150, marginTop: -530}}>
        1. Book Name
      </Text>
      <Separator />
      <Text style={{margin: 24, fontSize: 26, textAlign: 'center', marginLeft: -150, marginTop: 0}}>
        2. Book Name
      </Text>
      <Separator />
      <Text style={{margin: 24, fontSize: 26, textAlign: 'center', marginLeft: -150, marginTop: 0}}>
        3. Book Name
      </Text>
      <Separator />
      <Text style={{margin: 24, fontSize: 26, textAlign: 'center', marginLeft: -150, marginTop: 0}}>
        4. Book Name
      </Text>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0
  },
  secondParagh: {
    margin: 24,
    fontSize: 28,
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0
  },
  secondParagh: {
    margin: 24,
    fontSize: 28,
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0
  },
  separator: {
    marginVertical: 8,
    marginTop: -8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separatortwo: {
    marginVertical: 8,
    marginTop: 250,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
