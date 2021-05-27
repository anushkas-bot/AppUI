import React, { Component, useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Switch,
} from 'react-native';
import { Icon, Container, Content } from 'native-base';
import * as rn from 'react-native';
import * as nb from 'native-base';
//import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import { connect } from 'react-redux';
import { TagSelect } from 'react-native-tag-select';
//import database from '@react-native-firebase/database';
import Loader from './loader';
//import storage, { firebase } from '@react-native-firebase/storage';
import { NavigationActions, StackActions } from 'react-navigation'



const { width, height } = rn.Dimensions.get("window");

const tags = [
    { id: 1, label: 'Diary' },
    { id: 2, label: 'Erotica' },
    { id: 3, label: 'Friendship' },
    { id: 4, label: 'Film' },
    { id: 5, label: 'Humour' },
    { id: 6, label: 'Horror' },
    { id: 7, label: 'Inspiration' },
    { id: 8, label: 'Letter' },
    { id: 9, label: 'Life' },
    { id: 10, label: 'Long-form' },
    { id: 11, label: 'Love' },
    { id: 12, label: 'Meme' },
    { id: 13, label: 'Musings' },
    { id: 14, label: 'Miscellaneous' },
    { id: 15, label: 'Microtale' },
    { id: 16, label: 'Music' },
    { id: 17, label: 'One-liner' },
    { id: 18, label: 'Philosophy' },
    { id: 19, label: 'Poetry' },
    { id: 20, label: 'Politics' },
    { id: 21, label: 'Shayari' },
    { id: 22, label: 'Story' },
    { id: 23, label: 'Travel' },
];

const PostHeader = (props) => {
    //const theme = props.themeColor;
    let headerColor = '#0ADCD3'

    return (
        <LinearGradient style={styles.header}
            colors={headerColor}
            stops={[0.1, 0.3, 1]}
            center={[width + 50, 100]}
            radius={200}>
                <TouchableOpacity style={[styles.nIconCont]} >
                    <Icon name='chevron-left' type="Feather" style={{ fontSize: moderateScale(27), color: "#fff" }} />
                </TouchableOpacity>
            <View style={styles.leftHeader} >
                <Text style={styles.title} >Title</Text>
            </View>
            <TouchableOpacity style={[styles.nIconCont]} >
                <Icon name='check' type="MaterialIcons" style={{ fontSize: moderateScale(27), color: "#fff" }} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const Caption = (props) => {

    const [caption, setCaption] = useState('')
    const [mVisible, setMVisible] = useState(false);
    const [loading, setloading] = useState(false);
    const [privatePost, setPrivatePost] = useState(false);
    const [collabPost, setcollabPost] = useState('');
    const [categories, setCategories] = useState([]);
    const category = useRef();
    let bgColor = "FFF"
    let placeholderTextColor = 'rgba(0,0,0,0.5)'
    let textColor = "#1D1E28"
    let selectedBtn = "#333646";
    /*const postUploadedToDatabase = () => {
        setloading(true);
        let postUid = userData.uid + Number(new Date());
        let thumbnailPostLink = "";
        let fileExtension = wallpaperSS.replace(/^.*\./, '');
        let fileName = `${postUid}.${fileExtension}`;
        const reference = storage().ref(`userWallpapersThumbnails/${fileName}`);
        let d = reference.putFile(wallpaperSS)
        d.then(async (a) => {
            thumbnailPostLink = await firebase.storage().ref(`userWallpapersThumbnails/${fileName}`).getDownloadURL();
            let dataNeedToPost = {
                postedAt: Number(new Date()),
                likes: [],
                comments: [],
                thumbnailPostLink, thumbnailPostFilename: fileName, postUid, userUid: userData.uid, firstName: userData.firstName, lastName: userData.lastName, profileImage: userData.profileImage,
                wallpaperFilename, caption, privatePost, collabPost, categories, fontColor, fontSize,
                logoNumb, poetryBgWallpaper, post, postAlign, selectedFont, signatureAdded, title, wallpaperColor, wallpaperSelectGalleryLink
            }
            let user_postUpdated = database().ref('/').child(`user/${userData.uid}/postsNum`);
            user_postUpdated.once('value', snap => {
                if (snap.val()) {
                    let postsNum = snap.val() + 1;
                    user_postUpdated.set(postsNum)
                } else {
                    user_postUpdated.set(1)
                }
            })
            database().ref('/').child(`posts/${postUid}`).set(dataNeedToPost)
                .then(() => {
                    setloading(false);
                    const resetAction = StackActions.reset({
                        index: 0,
                        key: null,
                        actions: [NavigationActions.navigate({ routeName: 'MakePost' })],
                    });
                    alert("Post Successfully")
                    props.navigation.dispatch(resetAction);

                    // props.navigation.navigate("Home")
                }).catch(err => {
                    setloading(false);
                    alert(err)
                })
        }).catch(err => {
            alert(err)
        })
    }*/
    return (
        <Container style={{ flex: 1, backgroundColor: bgColor }} >
            <Content>
                <View style={{ ...styles.inputContainer, borderBottomColor: placeholderTextColor }} >
                    <View style={{ flex: 1, paddingHorizontal: wp('5%'), paddingBottom: hp('1%') }}>
                        <TextInput style={{ ...styles.input, color: textColor }} multiline={true} returnKeyType="done" autoCorrect={false} autoCapitalize="words" placeholderTextColor={placeholderTextColor} value={caption} onChangeText={caption => setCaption(caption)} placeholder="Add caption, with hashtags..." />
                    </View>
                    <View style={{ flex: 0.4, alignItems: "center" }}>
                        <Image source={require('./1.jpeg')} style={[styles.image, { borderColor: placeholderTextColor }]} />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{ ...styles.selectBtn, borderBottomColor: placeholderTextColor }} >
                    <View style={styles.selectBtnChild} >
                        <Text style={{ ...styles.input, fontSize: moderateScale(14), color: textColor }} >Select Categories ( max. 2 )</Text>
                        <Icon name="add-circle-outline" type="MaterialIcons" style={{ fontSize: moderateScale(18), color: textColor }} />
                    </View>
                    <View style={{ flexDirection: 'row', width, flexWrap: "wrap" }} >
                    </View>
                </TouchableOpacity>
                <View style={{ ...styles.selectBtn, ...styles.selectBtnChild, borderBottomColor: placeholderTextColor }} >
                    <View>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: moderateScale(14), color: textColor }} >Make Private</Text>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: moderateScale(12), color: placeholderTextColor }} >A private poetry is only visible to you.</Text>
                    </View>
                    <Switch trackColor={{ false: "#767577", true: selectedBtn }}
                        thumbColor={privatePost ? selectedBtn : "#f4f3f4"}
                        onValueChange={() => setPrivatePost(previousState => !previousState)}
                        value={privatePost} />
                </View>
                <View style={{ ...styles.selectBtn, ...styles.selectBtnChild, borderBottomColor: placeholderTextColor }} >
                    <View>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: moderateScale(14), color: textColor }} >Allow Collab</Text>
                        <Text style={{ fontFamily: 'Lato-Regular', fontSize: moderateScale(12), color: placeholderTextColor }} >Others can collab on this poetry.</Text>
                    </View>
                    <Switch trackColor={{ false: "#767577", true: selectedBtn }}
                        thumbColor={collabPost ? selectedBtn : "#f4f3f4"}
                        onValueChange={() => setcollabPost(previousState => !previousState)}
                        value={collabPost} />
                </View>
            </Content>
            <Modal animationType="slide" transparent={true} visible={mVisible} >
                <View style={{ flex: 1, backgroundColor: "transparent" }} >
                    <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} ></TouchableOpacity>
                    <View style={{ flex: 1, backgroundColor: "#fff" }} >
                        <Text style={styles.ccTitle} >Choose Category</Text>
                        <Text style={styles.ccDes} >Select Your Prefered Category</Text>
                        <ScrollView contentContainerStyle={{ justifyContent: "center", alignItems: "center" }} >
                            <TagSelect
                                max={2}
                                value={categories}
                                data={tags}
                                ref={category}
                                onMaxError={() => null}
                                itemStyle={{ ...styles.selectedTag, backgroundColor: "transparent", borderColor: selectedBtn }}
                                itemLabelStyle={{ ...styles.input, color: selectedBtn, fontSize: moderateScale(12) }}
                                itemStyleSelected={{ backgroundColor: selectedBtn, borderColor: selectedBtn }}
                                itemLabelStyleSelected={{ color: "#fff" }}
                            />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </Container>
    )
}

const styles = rn.StyleSheet.create({
    header: { width: '100%', height: hp('8.2%'), flexDirection: "row", shadowColor: "#000", borderBottomWidth: 1, borderBottomColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 5, elevation: 3, },
    leftHeader: { flex: 1, justifyContent: "center", paddingLeft: wp('5%') },
    title: { fontSize: moderateScale(20), fontFamily: "Lato-Bold", color: "#fff" },
    nIconCont: { height: '100%', width: wp('13%'), justifyContent: "center", alignItems: "center" },
    inputContainer: { width, flexDirection: "row", height: hp('17%'), borderBottomWidth: 1 },
    input: { fontSize: moderateScale(15), fontFamily: "Lato-Regular" },
    image: { height: hp('12%'), width: hp('12%'), borderRadius: wp('2%'), marginTop: hp('1%'), borderWidth: 1, marginRight: 20 },
    selectBtn: { paddingVertical: hp('2%'), paddingHorizontal: wp('5%'), borderBottomWidth: 1 },
    selectBtnChild: { flexDirection: 'row', justifyContent: "space-between", alignItems: "center" },
    selectedTag: { paddingHorizontal: wp('3%'), borderWidth: 1, paddingVertical: hp('0.5%'), marginHorizontal: wp('1%'), borderRadius: wp('2%'), marginTop: hp('1%') },
    ccTitle: { fontSize: moderateScale(15), color: "#333646", textAlign: "center", marginTop: hp('1.5%'), fontFamily: "Lato-Bold" },
    ccDes: { fontSize: moderateScale(12), fontFamily: "Lato-Regular", color: 'rgba(0,0,0,0.4)', borderBottomColor: "rgba(0,0,0,0.4)", textAlign: "center", borderBottomWidth: 1, width, paddingBottom: hp('1%') }
})

const mapStateToProps = state => {
    return {
        themeColor: state.auth.themeColor
    };
}

export default Caption;
