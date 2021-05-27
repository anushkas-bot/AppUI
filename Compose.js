import * as React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TextInput } from 'react-native';
import {Icon} from 'native-base';
// You can import from local files

// or any pure javascript modules available in npm
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';

export default function Compose() {
  const[titles, setTitle] = useState('');
  const[setline, setLineUserd] = useState('');
  const[posts, setPost] = useState('');
  let post = 'Type Your Poetry'
  let poetryTxt = '#333646'
  let title = 'Add Title'
  let titleplaceholderC = 'rgba(255,255,255,0.4)'
  let titleBorder = "#755139"
  const PostHeader = (props) => {
  let headerColor = '#0EFFD4';
  return (
        <View>
        <TouchableOpacity style={[styles.nIconCont]} >
          <Icon name='md-close' type="Ionicons" style={{ fontSize: moderateScale(27), color: "#fff" }} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.nIconCont]} >
          <Icon name='chevron-left' type="Feather" style={{ fontSize: moderateScale(27), color: "#fff" }} />
        </TouchableOpacity>
      <View style={styles.leftHeader} >
        <Text style={styles.title} >{props.title}</Text>
      </View>
      <TouchableOpacity style={[styles.nIconCont]} >
        <Icon name='chevron-right' type="Feather" style={{ fontSize: moderateScale(27), color: "#fff" }} />
      </TouchableOpacity>
      </View>
  )
}
  return (
    <>
      <PostHeader showClose={true} goBack={() => {
        setTitle("")
        setPost("")
        setLineUserd([])
        props.goBack()
      }} title="" themeColor='#0EFFD4' />
      <View style={{ flex: 1 }} >
        <View style={{ height: hp('6%'), width: '100%', borderBottomWidth: 1, borderBottomColor: titleBorder }} >
          <TextInput placeholder="Add Title" autoCapitalize="words" placeholderTextColor={titleplaceholderC}
            style={{ fontFamily: "Lato-SemiBold", paddingBottom: hp('0.8%'), textAlign: "center", fontSize: moderateScale(20), color: titleBorder }} value={title} onChangeText={v => setTitle(v)} />
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: wp('5%'), paddingBottom: hp('5%'), paddingTop: hp('3%') }} >
          <Text allowFontScaling={false} onTextLayout={e => setLineUserd(e.nativeEvent.lines)} style={{ opacity: 0, height: hp('45%'), position: "absolute", fontSize: 25 }} ></Text>
          <TextInput multiline={true} placeholder="Type Your Poetry" autoCapitalize="none" placeholderTextColor={titleplaceholderC}
            style={{ width: wp('90%'), fontFamily: "Lato-Medium", textAlign: "center", fontSize: moderateScale(16), color: poetryTxt }} value={post} onChangeText={v => setPost(v)} />
        </View>
      </View>
    </>
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
});
