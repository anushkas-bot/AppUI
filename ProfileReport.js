import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';

// You can import from local files

export default function ProfileReport() {
  let TxtColor = '#000'
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('./profileIcon.png')} />
      <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
            <TextInput placeholder="11" style={{ fontSize: moderateScale(20), fontFamily: "Lato-Semibold", lineHeight: hp('4%'),
            justifyContent: 'flex-start', marginTop: 60, marginLeft: 25}} />
            <TextInput placeholder="Likes" style={{ fontSize: moderateScale(10), lineHeight: hp('2%'), fontFamily: "Lato-Semibold", marginLeft: 20}} />
        </View>
        <View style={{flex:1}}>
            <TextInput placeholder="12" style={{ fontSize: moderateScale(20), fontFamily: "Lato-Semibold", lineHeight: hp('4%'),
            justifyContent: 'flex-start', marginTop: 60, marginLeft: 50}} />
            <TextInput placeholder="Shares" style={{ fontSize: moderateScale(10), lineHeight: hp('2%'), fontFamily: "Lato-Semibold", marginLeft: 40}} />
        </View>
        <View style={{flex:1}}>
          <TextInput placeholder="13" style={{ fontSize: moderateScale(20), fontFamily: "Lato-Semibold", lineHeight: hp('4%'),
          justifyContent: 'flex-start', marginTop: 60, marginLeft: 75}} />
          <TextInput placeholder="Comments" style={{ fontSize: moderateScale(10), lineHeight: hp('2%'), fontFamily: "Lato-Semibold", marginLeft: 60}} />
        </View>
        </View>
        <View style={{flexDirection:"row", marginTop: -100}}>
        <View style={{flex:1}}>
            <TextInput placeholder="11" style={{ fontSize: moderateScale(20), fontFamily: "Lato-Semibold", lineHeight: hp('4%'),
            justifyContent: 'flex-start', marginTop: 150, marginLeft: 25}} />
            <TextInput placeholder="Likes" style={{ fontSize: moderateScale(10), lineHeight: hp('2%'), fontFamily: "Lato-Semibold", marginLeft: 20}} />
        </View>
        <View style={{flex:1}}>
            <TextInput placeholder="12" style={{ fontSize: moderateScale(20), fontFamily: "Lato-Semibold", lineHeight: hp('4%'),
            justifyContent: 'flex-start', marginTop: 150, marginLeft: 50}} />
            <TextInput placeholder="Shares" style={{ fontSize: moderateScale(10), lineHeight: hp('2%'), fontFamily: "Lato-Semibold", marginLeft: 40}} />
        </View>
        <View style={{flex:1}}>
          <TextInput placeholder="13" style={{ fontSize: moderateScale(20), fontFamily: "Lato-Semibold", lineHeight: hp('4%'),
          justifyContent: 'flex-start', marginTop: 150, marginLeft: 75}} />
          <TextInput placeholder="Comments" style={{ fontSize: moderateScale(10), lineHeight: hp('2%'), fontFamily: "Lato-Semibold", marginLeft: 60}} />
        </View>
        </View>
        <View style={{flexDirection:"row", marginTop: 50}}>
        <View style={{width: 550, height: 50, backgroundColor: 'grey', marginLeft: -50}}>
        <Text style={{marginLeft: -70,marginTop: 10, textAlign: 'center',width: 450, height: 100, fontWeight: 'bold', fontSize: 20, fontFamily: 'lucida grande'}}>Recent Profile Visit:</Text>
        </View>
        </View>
        <View style={{flexDirection:"row", marginTop: 100}}>
        <View style={{flex:1}}>
            <Image style={{width: 60, height: 60, marginTop: -80}} source={require('./profileIcon.png')} />
            <Text style={{fontSize: moderateScale(10), fontFamily: "Lato-Semibold", lineHeight: hp('4%'), textAlign: "center", marginLeft: 36,
            marginTop: -60, color: TxtColor }} >John Wick</Text>
            <Text style={{fontSize: moderateScale(10), fontFamily: "Lato-Semibold", lineHeight: hp('4%'), textAlign: "center", marginLeft: 56,
            marginTop: -23, color: TxtColor }} >Software Developer</Text>
        </View>
        <View style={{flex:1}}>
            <Image style={{width: 60, height: 60, marginTop: 0, marginLeft: -200}} source={require('./profileIcon.png')} />
            <Text style={{fontSize: moderateScale(10), fontFamily: "Lato-Semibold", lineHeight: hp('4%'), textAlign: "center", marginLeft: -360,
            marginTop: -60, color: TxtColor }} >John Wick</Text>
            <Text style={{fontSize: moderateScale(10), fontFamily: "Lato-Semibold", lineHeight: hp('4%'), textAlign: "center", marginLeft: -350,
            marginTop: -23, color: TxtColor }} >Software Developer</Text>
        </View>
        </View>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: -100,
    marginLeft: 150
  },
  postCount: {
    fontSize: moderateScale(20),
    fontFamily: "Lato-Semibold",
    lineHeight: hp('4%'),
    textAlign: "center",
    marginLeft: -280,
    marginTop: 20
  },
  postCountTxt: {
    fontSize: moderateScale(10),
    lineHeight: hp('2%'),
    fontFamily: "Lato-Semibold",
    textAlign: "center",
    marginLeft: -280,
    marginTop: 0
  },
});
