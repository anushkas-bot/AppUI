import React, { Component } from 'react';
import * as rn from 'react-native';
import * as nb from 'native-base';
import Header from './Header';
import Loader from './loader';
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import { connect } from 'react-redux';
import Image from 'react-native-scalable-image';

const { width } = rn.Dimensions.get("window");

const CustomBtn = (props) => {
  let btnColor = '#0EFFD4'
  let titleTxtColor = "#333646"
  let btnInsideColor = '#fff'
  return (
    <rn.TouchableOpacity style={styles.btnCont} >
        <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
          <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >Title</rn.Text>
        </rn.View>
    </rn.TouchableOpacity>
  )
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let bgColor = "#1D1E28"
    let btnColor = '#0EFFD4'
    let titleTxtColor = "#333646"
    let btnInsideColor = '#fff'
    return (
      <nb.Container style={{ flex: 1, backgroundColor: 'fff' }} >
        <nb.Content>
          <rn.View style={styles.imageCont} >
            <Image width={wp('80%')} source={require('./pwtCard.png')} />
          </rn.View>
          <rn.View style={styles.btnsContainers} >
            <rn.TouchableOpacity side="left" style={styles.btnCont} onPress={() => navigation.navigate('PackageTracking')}>
                <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                  <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >My Wallet</rn.Text>
                </rn.View>
                </LinearGradient>
            </rn.TouchableOpacity>
            <rn.TouchableOpacity side="right" style={styles.btnCont} >
              <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                  <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >My Book Sales</rn.Text>
                </rn.View>
                </LinearGradient>
            </rn.TouchableOpacity>
          </rn.View>
            <rn.View style={styles.btnsContainers} >
              <rn.TouchableOpacity side="left" style={styles.btnCont} >
                <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                  <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                    <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >Book Package Tracking</rn.Text>
                  </rn.View>
                  </LinearGradient>
              </rn.TouchableOpacity>
              <rn.TouchableOpacity side="right" style={styles.btnCont} >
                <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                  <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                    <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >Profile Report</rn.Text>
                  </rn.View>
                  </LinearGradient>
              </rn.TouchableOpacity>
            </rn.View>
          <rn.View style={styles.btnsContainers} >
            <rn.TouchableOpacity side="left" style={styles.btnCont} >
            <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                  <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >Contest Won</rn.Text>
                </rn.View>
                </LinearGradient>
            </rn.TouchableOpacity>
            <rn.TouchableOpacity side="right" style={styles.btnCont} >
              <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                  <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >Published Works</rn.Text>
                </rn.View>
              </LinearGradient>
            </rn.TouchableOpacity>
          </rn.View>
          <rn.View style={styles.btnsContainers} >
            <rn.TouchableOpacity side="left" style={styles.btnCont} >
              <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                  <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >Pending Payments</rn.Text>
                </rn.View>
                </LinearGradient>
            </rn.TouchableOpacity>
            <rn.TouchableOpacity side="right" style={styles.btnCont} >
              <LinearGradient colors={['rgba(0,118,208,0.8)', '#0EFFD4']} style={{ flex: 1, padding: wp('0.5%') }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <rn.View style={{ flex: 1, backgroundColor: btnInsideColor, justifyContent: "center", alignItems: "center" }} >
                  <rn.Text style={[styles.titleTxt, { color: titleTxtColor }]} >My Oﬀers</rn.Text>
                </rn.View>
                </LinearGradient>
            </rn.TouchableOpacity>
          </rn.View>
        </nb.Content>
      </nb.Container>
    );
  }
}

const styles = rn.StyleSheet.create({
  imageCont: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: hp('4%'),
    marginBottom: hp('2%')
  },
  titleTxt: {
    fontFamily: "Lato-Regular",
    fontSize: moderateScale(16),
    textAlign: "center"
  },
  btnCont: {
    width: width / 2 - wp('8%'),
    height: hp('8%'),
  },
  btnsContainers: {
    marginVertical: hp('2%'),
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
})

const mapStateToProps = state => {
  return {
    themeColor: state.auth.themeColor
  };
}

export default Dashboard;
