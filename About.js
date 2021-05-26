import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';


export const About = () => {
  let TxtColor = '#000'
  let profilebg = require('./profile1.png')
  let followIcon = require('./follow1.png')
  let bookIcon = require('./book1.png')
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isAboutTimerOn, setIsAboutTimerOn] = useState(false)
  const about = 'about'

  const advanceTime = () => {
        setIsAboutTimerOn(true)
        setTimeout(() => {
            let nSeconds = time.seconds;
            let nMinutes = time.minutes;
            let nHours = time.hours;

            nSeconds++;

            if (nSeconds > 59) {
                nMinutes++;
                nSeconds = 0;
            }
            if (nMinutes > 59) {
                nHours++;
                nMinutes = 0;
            }
            if (nHours > 24) {
                nHours = 0;
            }

            isAboutTimerOn && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
        }, 1000);
        //console.log(time)
        //console.log(about)
    };

    const startTime = () => {
          advanceTime()
      }

      const stopTime = () => {
          setIsAboutTimerOn(false)
      }

      useEffect(() => {
            startTime()

            return () => {
                stopTime()
            }

        }, [startTime, stopTime])

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./addIcon1.png')}
      />
      <View style={[styles.iconContEnd, { top: hp('9%') }]} >
                    <TouchableOpacity>
                      <Image source={require('./galleryIcon1.png')} style={[styles.postIcon, { backgroundColor: '#1D1E28' }]} />
                      <Text style={[styles.postCount, { color: TxtColor }]} >0</Text>
                      <Text style={[styles.postCountTxt, { color: TxtColor }]} >Posts</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.iconContEnd, { top: hp('10%') }]} >
                  <TouchableOpacity>
                    <Image source={require('./follow1.png')} style={[styles.followIcon, { backgroundColor: '#1D1E28' }]} />
                    <Text style={[styles.postCounts, { color: TxtColor }]} >1</Text>
                    <Text style={[styles.postCountTxts, { color: TxtColor }]} >Followers</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.iconContEnd, { top: hp('9%') }]} >
                  <View style={[styles.profileImageMCont, { backgroundColor: '#1D1E28' }]} >
                    <Image style={styles.profileBg} source={profilebg} />
                    <Image style={styles.profileImage} source={require('./profileIcon.png')} />
                  </View>
                </View>
                <View style={[styles.iconContEnd, { top: hp('10%') }]} >
                    <TouchableOpacity >
                      <Image source={followIcon} style={[styles.followsIcon, { backgroundColor: '#1D1E28' }]} />
                      <Text style={[styles.postCount, { color: TxtColor }]} >29</Text>
                      <Text style={[styles.postCountTxt, { color: TxtColor }]} >Followings</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.iconContEnd, { top: hp('9%') }]} >
                    <TouchableOpacity>
                      <Image source={bookIcon} style={[styles.postsIcon, { backgroundColor: '#1D1E28' }]} />
                      <Text style={[styles.postCount, { color: TxtColor }]} >3</Text>
                      <Text style={[styles.postCountTxt, { color: TxtColor }]} >Reads</Text>
                    </TouchableOpacity>
                  </View>
                  </View>
  );
};

export const Abouts = () => {

  return (
    <View style={styles.container}>
      <About />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: hp('30%'),
    width: '100%',
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],
  },
  headerIconCont: {
    flexDirection: "row",
    height: hp('10%'),
    width: '100%'
  },
  iconsMainCont: {
    width: '100%',
    height: hp('18%'),
    position: "absolute",
    top: hp('15%'),
    left: 0
  },
  iconFChild: {
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
    height: "100%",
    justifyContent: "space-around",
  },
  iconContEnd: {
    alignItems: "center",
  },
  postIcon: {
    height: hp('7%'),
    width: hp('7%'),
    borderRadius: hp('8.5%') / 2,
    marginLeft: -170,
    marginTop: -30
  },
  postsIcon: {
    height: hp('7%'),
    width: hp('7%'),
    borderRadius: hp('8.5%') / 2,
    marginLeft: 300,
    marginTop: -120
  },
  followIcon: {
    height: hp('7%'),
    width: hp('7%'),
    borderRadius: hp('10%') / 2,
    borderWidth: hp('0.3%'),
    marginLeft: -100,
    marginTop: -100
  },
  followsIcon: {
    height: hp('7%'),
    width: hp('7%'),
    borderRadius: hp('10%') / 2,
    borderWidth: hp('0.3%'),
    marginLeft: 180,
    marginTop: -110
  },
  profileImageMCont: {
    height: hp('10%'),
    width: hp('10%'),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp('16%') / 2,
    overflow: "hidden",
    marginLeft: 20,
    marginTop: -100
  },
  profileBg: {
    height: hp('15%'),
    width: hp('15%'),
    borderRadius: hp('15%') / 2,
    overflow: "hidden",
    borderWidth: hp('1%'),
  },
  profileImage: {
    position: "absolute",
    height: hp('12%'),
    width: hp('12%'),
    borderRadius: hp('12%') / 2,
    overflow: "hidden",
    borderWidth: hp('1%'),
  },
  postCount: {
    fontSize: moderateScale(20),
    fontFamily: "Lato-Semibold",
    lineHeight: hp('4%'),
    textAlign: "center",
    marginLeft: -280,
    marginTop: 0
  },
  postCountTxt: {
    fontSize: moderateScale(10),
    lineHeight: hp('2%'),
    fontFamily: "Lato-Semibold",
    textAlign: "center",
    marginLeft: -280,
    marginTop: 0
  },
  postCounts: {
    fontSize: moderateScale(20),
    fontFamily: "Lato-Semibold",
    lineHeight: hp('4%'),
    textAlign: "center",
    marginLeft: -180,
    marginTop: 0
  },
  postCountTxts: {
    fontSize: moderateScale(10),
    lineHeight: hp('2%'),
    fontFamily: "Lato-Semibold",
    textAlign: "center",
    marginLeft: -180,
    marginTop: 0
  },
  profileName: {
    fontSize: moderateScale(28),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: hp('12%'),
    lineHeight: hp('6%')
  },
  userName: {
    lineHeight: hp('3%'),
    fontSize: moderateScale(18),
    fontFamily: "Lato-Bold",
    textAlign: "center",
  },
  userDes: {
    fontSize: moderateScale(15),
    fontFamily: "Lato-Semibold",
    textAlign: "center",
    width: wp('95%'),
    alignSelf: "center"
  },
  userLink: {
    color: '#119EC9',
    fontSize: moderateScale(15),
    fontFamily: "Lato-Semibold",
    textAlign: "center",
    lineHeight: hp('2.5%'),
  },
  tabBarCustom: {
    width: '100%',
    height: hp('7%'),
    flexDirection: "row"
  },
  tabCustom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  follow: {
    color: '#fff',
    fontFamily: "Lato-Heavy",
    fontSize: moderateScale(16),
    marginHorizontal: wp('3%')
  },
  noPostTxt: {
    fontFamily: "Lato-Medium",
    fontSize: moderateScale(18),
    marginVertical: hp('3%'),
    textAlign: "center"
  },
  postCont: {
    flex: 1 / 3,
    margin: wp('1%'),
    borderRadius: wp('2%'),
    overflow: "hidden"
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    marginTop: 100,
    justifyContent: 'center'
  },
  tinyLogo :{
    height: 80,
    width: 80
  }
});

export default Abouts;
