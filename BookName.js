import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import LinearGradient from 'react-native-linear-gradient'

export default function BookName({navigation}) {
  return (
    <View style={{flexDirection:"row"}}>
    <View style={{flex:1}}>
        <TextInput placeholder="Total Payment" style={{justifyContent: 'flex-start'}} />
    </View>
    <View style={{flex:1}}>
        <TextInput placeholder="100" style={{justifyContent: 'flex-end'}} />
    </View>
      <Text style={{margin: 24, fontSize: 26, textAlign: 'center', marginLeft: -150, marginTop: 0}}>
        Payment History
      </Text>
      <View style={{flex:1}}>
          <TextInput placeholder="Initial Paid" style={{justifyContent: 'flex-start'}} />
      </View>
      <View style={{flex:1}}>
          <TextInput placeholder="100" style={{justifyContent: 'flex-end'}} />
      </View>
      <View style={{flex:1}}>
          <TextInput placeholder="Total Paid" style={{justifyContent: 'flex-start'}} />
      </View>
      <View style={{flex:1}}>
          <TextInput placeholder="100" style={{justifyContent: 'flex-end'}} />
      </View>
      <View style={{flex:1}}>
          <TextInput placeholder="Pending Paid" style={{justifyContent: 'flex-start'}} />
      </View>
      <View style={{flex:1}}>
          <TextInput placeholder="100" style={{justifyContent: 'flex-end'}} />
      </View>
      <TouchableOpacity
        style={styles.button}
      >
        <Text>Pay Now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
      >
        <Text>Help</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
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
