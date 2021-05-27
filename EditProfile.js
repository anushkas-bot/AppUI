import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Header} from './Header';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-datepicker';
//import {Dropdown} from 'react-native-material-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
//import ImagePicker from 'react-native-image-picker';
import {COLORS} from './Colors';
import {IMAGES} from './Images';

class EditProfile extends Component {
  // Remove React Navigation Header
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      whatsappNumber: '',
      profileImage: '',
      achievements: '',
      profession: '',
      gender: [
        {
          value: 'Male',
        },
        {
          value: 'Female',
        },
        {
          value: 'Prefer not to say',
        },
      ],
    };
  }

  // Take or get event image
  getProfileImage() {
    const options = {
      title: 'Select Profile Image',
      mediaType: 'photo',
      maxWidth: 150,
      maxHeight: 150,
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.data};
        this.setState({
          profileImage: 'data:' + response.type + ';base64,' + response.data,
        });
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BACKGROUND}}>
        <Header title="Poetry World" />
        <KeyboardAwareScrollView>
          <ScrollView
            style={{flex: 1, marginVertical: 10, marginHorizontal: 50}}>
            {/** Choose or take image option */}
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 150,
                height: 150,
                borderColor: COLORS.BORDER,
                borderRadius: 150 / 2,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
            </TouchableOpacity>
            <Text
              style={{
                color: COLORS.TEXT,
                marginBottom: 25,
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Edit Profile
            </Text>
            <View
              style={[styles.mainTextFieldsViewStyle, {marginVertical: 10}]}>
              <View style={styles.iconViewStyle}>
                {/* <FontAwesome5 name="user" size={20} color={COLORS.ICON} /> */}
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  autoCapitalize="none"
                  placeholder="First Name *"
                  placeholderTextColor={COLORS.PLACEHOLDER}
                  style={styles.textInputStyle}
                />
              </View>
            </View>
            <View
              style={[styles.mainTextFieldsViewStyle, {marginVertical: 10}]}>
              <View style={styles.iconViewStyle}>
                {/* <FontAwesome5 name="user" size={20} color={COLORS.ICON} /> */}
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Last Name *"
                  placeholderTextColor={COLORS.PLACEHOLDER}
                  style={styles.textInputStyle}
                />
              </View>
            </View>
            <DatePicker
              style={{width: '100%'}}
              mode="date"
              placeholder="DOB *"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              // iconComponent={
                // <FontAwesome5
                //   name="calendar"
                //   size={20}
                //   color={COLORS.ICON}
                //   style={{position: 'absolute', left: 15}}
                // />
              // }
              customStyles={{
                dateInput: {
                  borderBottomWidth: 1,
                  borderBottomColor: COLORS.BORDER,
                  borderTopWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                },
                dateText: {
                  color: COLORS.TEXT,
                  fontSize: 18,
                  paddingRight: 100,
                },
                placeholderText: {
                  color: COLORS.PLACEHOLDER,
                  fontSize: 16,
                  paddingRight: 150,
                },
                // ... You can check the source to find the other keys.
              }}
            />
            <View
              style={[styles.mainTextFieldsViewStyle, {marginVertical: 10}]}>
              <View style={styles.iconViewStyle}>
                {/* <FontAwesome5 name="mobile-alt" size={20} color={COLORS.ICON} /> */}
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Phone Number *"
                  placeholderTextColor={COLORS.PLACEHOLDER}
                  style={styles.textInputStyle}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            <View
              style={[styles.mainTextFieldsViewStyle, {marginVertical: 10}]}>
              <View style={styles.iconViewStyle}>
                {/* <FontAwesome5 name="user-tie" size={20} color={COLORS.ICON} /> */}
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Profession"
                  placeholderTextColor={COLORS.PLACEHOLDER}
                  style={styles.textInputStyle}
                />
              </View>
            </View>
            <View
              style={[styles.mainTextFieldsViewStyle, {marginVertical: 10}]}>
              <View style={styles.iconViewStyle}>
                {/* <FontAwesome5 name="award" size={20} color={COLORS.ICON} /> */}
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  autoCapitalize="none"
                  placeholder="Achievements (Optional)"
                  placeholderTextColor={COLORS.PLACEHOLDER}
                  style={styles.textInputStyle}
                  multiline={true}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: COLORS.BORDER,
                padding: 5,
                marginTop: 30,
              }}>
              <Text
                style={{color: COLORS.TEXT, textAlign: 'center', fontSize: 20}}>
                PROCEED
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  mainTextFieldsViewStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },
  textInputStyle: {
    color: COLORS.TEXT,
    paddingVertical: 10,
    paddingLeft: 5,
    fontSize: 18,
  },
  iconViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
};

export default EditProfile;
