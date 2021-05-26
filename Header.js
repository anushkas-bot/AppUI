import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import LinearGradient from 'react-native-radial-gradient';
import Image from 'react-native-scalable-image';
import * as rn from 'react-native';
import { View, TouchableOpacity} from 'react-native';

import { connect } from 'react-redux';
const { width } = rn.Dimensions.get("window");

const Header = props => {
  return (
          <View>
          <View style={styles.leftHeader} >
            <Image style={styles.logo1} source={require('./logo_1.png')} />
          </View>
          <TouchableOpacity style={[styles.nIconCont]} >
            <Image width={wp('5%')} source={require('./menu.png')} />
          </TouchableOpacity>
          </View>
  );
};

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
  leftHeader: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: wp('4%')
  },
  logo: {
    height: hp('5.2%'),
    width: hp('22.25%'),
  },
  logo1: {
    height: hp('5%'),
    marginLeft: wp('1.5%'),
    width: hp('21.4%'),
  },
  nIconCont: {
    height: '100%',
    width: wp('13%'),
    justifyContent: "center",
    paddingLeft: wp('4%')
  },
})

const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor
  };
}

export default Header;
