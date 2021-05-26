import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import moment from 'moment';

const Notification = (props) => {
  const theme = props.themeColor;
  let searchItemBG = theme == "dark" ? "#333646" : "#fff";
  let nameColor = theme == "dark" ? "#fff" : "#252734";
  let nameTxtColor = theme == "dark" ? "rgba(255,255,255,0.6)" : "#252734";
  return (
    <TouchableOpacity onPress={() => {
      if(props.notify.routeScreen == "PeopleProfile"){
        props.navigation.navigate("NotifyPeople", { routetab: "search", userData: {uid: props.notify.senderUid} })
      }
    }} style={[styles.searchItemCont, { backgroundColor: searchItemBG}]}>
      <View style={styles.profileCont} >
        <Image source={props.notify.profileImage == "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/600px-Circle-icons-profile.svg.png" ? require('./profileIcon.png') : {uri: props.notify.profileImage }} style={{width: hp('5%'), height:hp('5%'), borderRadius: hp('5%') / 2}} />
      </View>
      <View style={{flex: 1, justifyContent: "center"}}>
  <Text style={{fontSize: moderateScale(15),lineHeight: hp('2.5%'), fontFamily: 'Lato-Semibold', color: nameColor }}>{props.notify.message}</Text>
  {/* <Text style={{fontSize: moderateScale(13),lineHeight: hp('2.4%'), fontFamily: 'Lato-Medium', color: nameTxtColor }} >{moment(props.notify.notifyAt).fromNow()}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchItemCont: {
    width: '100%',
    height: hp('8.2%'),
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  profileCont: {
    width: wp('15%'),
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  }
})

const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor
  };
}

export default connect(mapStateToProps)(Notification);
