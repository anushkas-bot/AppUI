import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Container} from 'native-base';
//import Notification from './Notification';
import { connect } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import LinearGradient from 'react-native-radial-gradient';
import Image from 'react-native-scalable-image';
import AsyncStorage from "@react-native-community/async-storage";
import * as rn from 'react-native';
//import database from '@react-native-firebase/database';
//import Loader from './loader';

const { width } = 22

export default function Notifications() {
  let headerColor = '#0EFFD4'
  let textColor = "#5A6E7E"
  return (
    <Container style={{ flex: 1, backgroundColor: '#fff' }} >
          <View >
            <Image style={{ marginTop: 30, marginLeft: 10 }} width={wp('10%')} source={require('./profileIcon.png')} />
            <Text style={{ marginTop: -30, marginLeft: -20, fontFamily: "Lato-Medium", fontSize: moderateScale(18), color: textColor, marginVertical: hp('0%'), textAlign: "center" }} >Demo User follows you.</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 20
              }}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "center" }} >
            <Text style={[styles.title]} >Notifications</Text>
          </View>
          <TouchableOpacity style={[styles.nIconCont]} >
            <Image width={wp('5%')} source={require('./menu.png')} />
          </TouchableOpacity>
            <FlatList
              keyExtractor={(item, index) => String(index)}
              onEndReachedThreshold={0}
            />
            <Text style={{ fontFamily: "Lato-Medium", fontSize: moderateScale(18), color: textColor, marginVertical: hp('3%'), textAlign: "center" }} >No Notification Found.</Text>
      </Container>
  );
}

const styles = rn.StyleSheet.create({
  header: {
    width: '100%',
    height: hp('8.2%'),
    flexDirection: "row",
    shadowColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  nIconCont: {
    height: '100%',
    width: wp('13%'),
    justifyContent: "center",
    paddingLeft: wp('4%')
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: "Lato-Bold",
    color: "#fff"
  }
})

const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor
  };
}
