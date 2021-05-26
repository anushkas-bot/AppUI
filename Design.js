import * as React from 'react';
import { useState } from 'react';
import * as rn from 'react-native';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList, Picker } from 'react-native';
import { Icon } from 'native-base';
import { Image } from 'react-native-elements';
import CustomFonts from './customFonts';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';

const { width, height } = rn.Dimensions.get("window");

function Fonts() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

function Wallpapers() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
      <TouchableOpacity style={[styles.wallPapersContList, { borderColor: '#000', marginLeft: -200 }]} >
      <rn.Image source={require('./libraryIcon.png')} style={{ height: wp('7%'), width: wp('7%'), resizeMode: "contain" }} />
      <Text style={[styles.wallTitle, { color: '000' }]} >Library</Text>
      </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
      <TouchableOpacity style={[styles.wallPapersContList, {  borderColor: '#000', marginLeft: -100, marginTop: -70 }]} >
      <rn.Image source={require('./addCamera.jpg')} style={{ height: wp('7%'), width: wp('7%'), resizeMode: "contain" }} />
      <Text style={[styles.wallTitle, { color: '000' }]} >Add Image</Text>
    </TouchableOpacity>
    </View>
    <View style={{ flex: 1 }}>
    <TouchableOpacity style={[styles.wallPapersContList, { borderColor: '#000', marginLeft: 95, marginTop: -145 }]} >
    <rn.Image source={require('./colorSelection.jpg')} style={{ height: wp('7%'), width: wp('7%'), resizeMode: "contain" }} />
    <Text style={[styles.wallTitle, { color: '000' }]} >Select Color</Text>
  </TouchableOpacity>
  </View>
  <View style={{ flex: 1 }}>
  <TouchableOpacity style={[styles.wallPapersContList, { borderColor: '#000', marginLeft: 295, marginTop: -220 }]} >
  <rn.Image source={require('./1.jpeg')} style={{ height: wp('25%'), width: wp('20%'), resizeMode: "contain" }} />
  </TouchableOpacity>
  </View>
  <View style={{ flex: 1 }}>
  <TouchableOpacity style={[styles.wallPapersContList, { borderColor: '#000', marginLeft: -100, marginTop: -200 }]} >
  <rn.Image source={require('./theme1.png')} style={{ height: wp('25%'), width: wp('20%'), resizeMode: "contain" }} />
  </TouchableOpacity>
  </View>
  <View style={{ flex: 1 }}>
  <TouchableOpacity style={[styles.wallPapersContList, { borderColor: '#000', marginLeft: 95, marginTop: -275 }]} >
  <rn.Image source={require('./profile1.png')} style={{ height: wp('25%'), width: wp('20%'), resizeMode: "contain" }} />
  </TouchableOpacity>
  </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Design() {
  return (
      <Tab.Navigator style={{ marginTop: 300, color:'#3b91cd'}}>
        <Tab.Screen name="Wallpapers" component={Wallpapers}/>
        <Tab.Screen name="Fonts" component={Fonts}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  sliderCont: { width: undefined, height: hp('5%'), borderRadius: wp('2%'), justifyContent: "space-evenly", alignItems: "center", flexDirection: "row" },
  wallTitle: { fontFamily: 'Lato-Regular', fontSize: 12, marginTop: hp('1%') },
  wallPapersContList: { width: width / 4.5, height: hp('10%'), marginVertical: hp('0.6%'), marginHorizontal: wp('1%'), borderWidth: 1, borderRadius: wp('2%'), overflow: "hidden", justifyContent: "center", alignItems: "center" },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
