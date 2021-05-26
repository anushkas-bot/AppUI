import React, { Component } from 'react';
import * as rn from 'react-native';
import * as nb from 'native-base';
import {TouchableOpacity, View, Text, ActivityIndicator, TextInput, SafeAreaView, FlatList, ScrollView, ImageBackground, Modal } from 'react-native'
import {Container, Content} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
//import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from 'react-native-linear-gradient';
import Image from 'react-native-scalable-image';
//import database from '@react-native-firebase/database';
import Loader from './loader';
//import messaging from '@react-native-firebase/messaging';
import { StackActions, NavigationActions } from 'react-navigation';
import CustomFonts from './customFonts';

const { width } = rn.Dimensions.get('window')

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        require('./galleryMain.png'),
        require('./handShake.png'),
        require('./bookmark.png'),
      ],
      active: 0,
      xtabOne: 0,
      xtabTwo: 0,
      xtabThree: 0,
      translateX: new rn.Animated.Value(0),
      coverImage: "",
      profileImage: "",
      firstName: "",
      lastName: "",
      userName: "",
      bio: "",
      uid: "",
      websiteLink: "",
      followers: 0,
      followings: 0,
      postsNum: 0,
      reads: [],
      loading: false,
      loginUserUid: "",
      loginUserFollowings: null,
      loginUserData: null,
      btnName: "Edit Profile",
      btnLoading: false,
      routeName: "",
      postShowLimit: 20,
      postsLoading: false,
      postsList: [],
      newProfileRoute: false
    }
  }

  /*UNSAFE_componentWillMount() {
    this.loadAuthData();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      if (this.state.newProfileRoute) {
        this.setState({ newProfileRoute: false })
        this.loadAuthData();
      }
    });
  }*/

  async loadAuthData() {
    this.setState({ loading: true })
    const user = await AsyncStorage.getItem("@userData");
    let userData = JSON.parse(user);
    const { params } = this.props.navigation.state;
    if (!params) {
      let routeName = this.props.navigation.dangerouslyGetParent().getParam('routetab');
      if (routeName === "profiletab") {
        this.setState({ routeName: routeName })
        await this.getLoginUser(userData)
        this.loadPosts(userData)
      } else {
        await this.getUserProfile(userData)
        this.loadPosts()
      }
    } else {
      await this.getUserProfile(userData)
      this.loadPosts()
    }
  }

  /*loadPosts(v) {
    this.setState({ postsLoading: true })
    if (v) {
      database().ref('/').child(`posts`).orderByChild('userUid').equalTo(v.uid).limitToFirst(this.state.postShowLimit).once("value", snap => {
        let postsList = [];
        if (snap.val()) {
          for (let key in snap.val()) {
            postsList.push(snap.val()[key])
          }
          this.setState({ postsList, postsLoading: false })
        } else {
          this.setState({ postsLoading: false })
        }
      })
    } else {
      let routeUser = this.props.navigation.state.params.userData;
      database().ref('/').child(`posts`).orderByChild('userUid').equalTo(routeUser.uid).limitToFirst(this.state.postShowLimit).once("value", snap => {
        let postsList = [];
        if (snap.val()) {
          for (let key in snap.val()) {
            postsList.push(snap.val()[key])
          }
          this.setState({ postsList, postsLoading: false })
        } else {
          this.setState({ postsLoading: false })
        }
      })
    }
  }*/

  /*getUserProfile(userData) {
    let routeName = this.props.navigation.state.params.routetab;
    if (routeName == "search" || routeName == "profile_FF" || routeName == "search_FF") {
      let routeUser = this.props.navigation.state.params.userData;
      this.setState({ routeName })
      database().ref('/').child(`user/${routeUser.uid}`).on('value', snap => {
        if (snap.val()) {
          var user = snap.val();
          database().ref('/').child(`followings/${userData.uid}`).orderByChild('uid').equalTo(routeUser.uid).on('value', btn => {
            if (btn.val()) {
              this.setState({ loading: false, btnName: "Following", loginUserFollowings: btn.val() })
            } else {
              this.setState({ loading: false, btnName: "Follow", loginUserFollowings: null })
            }
          })
          this.setState({
            firstName: user.firstName ? user.firstName : "",
            lastName: user.lastName ? user.lastName : "",
            userName: user.userName ? user.userName : "",
            profileImage: user.profileImage ? user.profileImage : "",
            coverImage: user.coverImage ? user.coverImage : "",
            websiteLink: user.websiteLink ? user.websiteLink : "",
            bio: user.bio ? user.bio : "",
            uid: user.uid,
            followers: user.followers ? user.followers : 0,
            followings: user.followings ? user.followings : 0,
            postsNum: user.postsNum ? user.postsNum : 0,
            reads: user.reads ? user.reads : [],
            loginUserUid: userData.uid,
            loginUserData: userData,
          })
        }
      }, e => {
        this.setState({ loading: false })
        alert(e)
      })
    }
  }*/

  /*getLoginUser(v) {
    database().ref('/').child(`user/${v.uid}`).on('value', snap => {
      if (snap.val()) {
        var user = snap.val();
        this.setState({
          firstName: user.firstName ? user.firstName : "",
          lastName: user.lastName ? user.lastName : "",
          userName: user.userName ? user.userName : "",
          profileImage: user.profileImage ? user.profileImage : "",
          coverImage: user.coverImage ? user.coverImage : "",
          websiteLink: user.websiteLink ? user.websiteLink : "",
          bio: user.bio ? user.bio : "",
          uid: user.uid,
          followers: user.followers ? user.followers : 0,
          followings: user.followings ? user.followings : 0,
          postsNum: user.postsNum ? user.postsNum : 0,
          loginUserUid: v.uid,
          reads: user.reads ? user.reads : [],
          loading: false,
        })
      }
    }, e => {
      this.setState({ loading: false })
      alert(e)
    })
  }*/

  handleSlide(type) {
    const { active, xtabOne, xtabTwo, xtabThree, translateX } = this.state;
    rn.Animated.spring(translateX, {
      toValue: type,
      duration: 100
    }).start();
    if (active == 0) {
      this.scroll.scrollTo({ x: 0 })
    } else if (active == 1) {
      this.scroll.scrollTo({ x: width })
    } else {
      this.scroll.scrollTo({ x: width * 2 })
    }
  }

  /*async handleBtn(v) {
    const { loginUserUid, uid, loginUserData, firstName, lastName, userName, profileImage, loginUserFollowings } = this.state;
    if (v == "Edit Profile") {
      this.props.navigation.navigate('EditProfile', { routeName: "profile" })
    }
    else if (v == "Following") {
      this.setState({ btnLoading: true })
      const { firstName, lastName } = this.state.loginUserData;
      database().ref('/').child(`followings/${loginUserUid}/${Object.keys(loginUserFollowings)[0]}`).remove();
      database().ref('/').child(`followers/${uid}`).orderByChild('userId').equalTo(loginUserUid).once('value', snap => {
        database().ref('/').child(`followers/${uid}/${Object.keys(snap.val())[0]}`).remove();
        let loginUser_followings = database().ref('/').child(`user/${loginUserUid}/followings`);
        let user_followers = database().ref('/').child(`user/${uid}/followers`);
        loginUser_followings.once('value', snap => {
          if (snap.val()) {
            let update_Followings = snap.val() - 1;
            loginUser_followings.set(update_Followings)
          }
          user_followers.once('value', async snap => {
            if (snap.val()) {
              let update_Followers = snap.val() - 1;
              user_followers.set(update_Followers)
            }
            database().ref('/').child(`notifications/${uid}/${firstName} ${lastName} follows you`).remove()
            this.setState({ btnLoading: false })
          })
        })
      })
    }
    else if (v == "Follow") {
      this.setState({ btnLoading: true })
      var followingRef = database().ref('/').child(`followings/${loginUserUid}`);
      var followersRef = database().ref('/').child(`followers/${uid}`);
      var newChild_followingRef = followingRef.push({ uid: uid, firstName, lastName, profileImage, userName });
      var newChild_followersRef = followersRef.push({ uid: loginUserUid, firstName: loginUserData.firstName, lastName: loginUserData.lastName, profileImage: loginUserData.profileImage, userName: loginUserData.userName });
      followingRef.child(newChild_followingRef.key).update({ uniqueId: newChild_followingRef.key });
      followersRef.child(newChild_followersRef.key).update({ uniqueId: newChild_followersRef.key });
      let loginUser_followings = database().ref('/').child(`user/${loginUserUid}/followings`);
      let user_followers = database().ref('/').child(`user/${uid}/followers`);
      loginUser_followings.once('value', snap => {
        if (snap.val()) {
          let update_Followings = snap.val() + 1;
          loginUser_followings.set(update_Followings)
        } else {
          loginUser_followings.set(1)
        }
        user_followers.once('value', async snap => {
          if (snap.val()) {
            let update_Followers = snap.val() + 1;
            user_followers.set(update_Followers)
          } else {
            user_followers.set(1)
          }
          await this.setNotification()
          this.setState({ btnLoading: false })
        })
      })
    }
  }*/

  /*setNotification() {
    const { uid, firstName, lastName, profileImage } = this.state.loginUserData;
    database().ref('/').child(`notifications/${this.state.uid}`).once("value", notify => {
      let messageSend = {
        message: `${firstName} ${lastName} follows you.`,
        profileImage: profileImage ? profileImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/600px-Circle-icons-profile.svg.png",
        senderUid: uid,
        showNotify: true,
        pressNotify: true,
        routeScreen: "PeopleProfile",
        notifyAt: String(new Date())
      }
      database().ref('/').child(`notifications/${this.state.uid}`).update({ [`${firstName} ${lastName} follows you`]: messageSend })
    })
  }*/

  retrieveMore = () => {

  }

  render() {
    //let theme = this.props.themeColor;
    //const { active, xtabOne, xtabTwo, xtabThree, translateX, routes } = this.state;

    let bgColor = '#1D1E28'
    let tabColor = '#0EFFD4'
    let followColor = '#0EFFD4'
    let theme_color = '#0076D0'
    let addIcon = require('./addIcon1.png')
    let backIcon = require('./backP1.png')
    let profilebg = require('./profile1.png')
    let drawerIcon = require('./dMenu1.png')
    let postIcon = require('./galleryIcon1.png')
    let followIcon = require('./follow1.png')
    let bookIcon = require('./book1.png')
    let headerColor = '#0ADCD3'
    let checkFollow = "#A9A9A9"
    let TxtColor = '#1D1E28'
    return (
      <Container style={{ flex: 1, backgroundColor: bgColor }}>
            <Content>
              <View style={styles.parent}>
                <View style={styles.child}>
                  <ImageBackground source={require('./coverphoto.png')} style={{ height: null, width: null, flex: 1, resizeMode: "cover" }} >
                    <View style={styles.headerIconCont} >
                      <View style={{ flex: 1 }} >
                            <TouchableOpacity >
                              <Image source={backIcon} style={{ height: hp('8%'), width: hp('8%'), resizeMode: "contain" }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <Image source={addIcon} style={{ height: hp('10%'), width: hp('10%'), resizeMode: "contain" }} />
                            </TouchableOpacity>
                      </View>
                      <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }} >
                        <TouchableOpacity >
                          <Image source={drawerIcon} style={{ height: hp('8%'), width: hp('8%'), resizeMode: "contain" }} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
              <View style={styles.iconsMainCont} >
                <View style={styles.iconFChild} >
                  <View style={[styles.iconContEnd, { top: hp('9%') }]} >
                    <TouchableOpacity>
                      <Image source={postIcon} style={[styles.postIcon, { backgroundColor: bgColor }]} />
                      <Text style={[styles.postCount, { color: TxtColor }]} >18</Text>
                      <Text style={[styles.postCountTxt, { color: TxtColor }]} >Posts</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.iconContEnd, { top: hp('10%') }]} >
                    <TouchableOpacity>
                      <Image source={followIcon} style={[styles.followIcon, { backgroundColor: bgColor }]} />
                      <Text style={[styles.postCount, { color: TxtColor }]} >120</Text>
                      <Text style={[styles.postCountTxt, { color: TxtColor }]} >Followers</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.iconContEnd, { top: hp('9%') }]} >
                    <View style={[styles.profileImageMCont, { backgroundColor: bgColor }]} >
                      <Image style={styles.profileBg} source={profilebg} />
                      <Image style={styles.profileImage} source={require('./profileIcon.png')} />
                    </View>
                  </View>
                  <View style={[styles.iconContEnd, { top: hp('10%') }]} >
                    <TouchableOpacity >
                      <Image source={followIcon} style={[styles.followIcon, { backgroundColor: bgColor }]} />
                      <Text style={[styles.postCount, { color: TxtColor }]} >93</Text>
                      <Text style={[styles.postCountTxt, { color: TxtColor }]} >Followings</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.iconContEnd, { top: hp('9%') }]} >
                    <TouchableOpacity>
                      <Image source={bookIcon} style={[styles.postIcon, { backgroundColor: bgColor }]} />
                      <Text style={[styles.postCount, { color: TxtColor }]} >26</Text>
                      <Text style={[styles.postCountTxt, { color: TxtColor }]} >Reads</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Text style={[styles.profileName, { color: TxtColor }]} >Haris Shahid</Text>
              <Text style={[styles.userName, { color: '#A9A9A9' }]} >harisshahid</Text>
              <Text style={[styles.userDes, { color: TxtColor }]} >kind funny</Text>
              <TouchableOpacity>
                  <Text style={styles.userLink} ></Text>
                </TouchableOpacity>
              <TouchableOpacity style={{ alignSelf: "center", height: hp('5%'), width: undefined, borderRadius: hp('1%'), overflow: "hidden", marginVertical: hp('2%') }} >
              </TouchableOpacity>
              <ScrollView
                ref={(node) => this.scroll = node}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
              >
                <View style={{ width, height: hp('50%') }} >
                </View>
                <View style={{ width, height: hp('50%') }} >
                </View>
              </ScrollView>
            </Content>
      </Container>
    );
}
}

const styles = rn.StyleSheet.create({
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
    height: hp('8.5%'),
    width: hp('8.5%'),
    borderRadius: hp('8.5%') / 2,
  },
  followIcon: {
    height: hp('10%'),
    width: hp('10%'),
    borderRadius: hp('10%') / 2,
    borderWidth: hp('0.3%'),
  },
  profileImageMCont: {
    height: hp('16%'),
    width: hp('16%'),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp('16%') / 2,
    overflow: "hidden"
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
    borderWidth: hp('1%')
  },
  postCount: {
    fontSize: moderateScale(25),
    fontFamily: "Lato-Semibold",
    lineHeight: hp('4%'),
    textAlign: "center"
  },
  postCountTxt: {
    fontSize: moderateScale(12),
    lineHeight: hp('2%'),
    fontFamily: "Lato-Semibold",
    textAlign: "center"
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
  }
})

const mapStateToProp = state => {
  return {
    userData: state.auth.registeredUser,
    themeColor: state.auth.themeColor
  }
}

export default Profile;
