import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ThemeCard} from './ThemeCard';
import {Header} from './Header';
import {COLORS} from './Colors';
import DocumentPicker from 'react-native-document-picker';

export default function PublishYourBook() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        title="Poetry World"
        homeScreen={true}
      />
      {/** Themes */}
      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ThemeCard />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ThemeCard />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ThemeCard />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ThemeCard />
          </View>
        </View>
      </ScrollView>
      {/** Line */}
      <View style={{borderWidth: 0.4, marginVertical: 10}} />
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
          Upload Here
        </Text>
        <TextInput
          placeholder="Enter Member Id"
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            borderWidth: 0.3,
            borderColor: COLORS.BORDER,
            fontSize: 18,
            padding: 10,
          }}
        />
        <TouchableOpacity
          style={{
            padding: 10,
            borderWidth: 1,
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <Text style={{alignSelf: 'center'}}>PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 10, borderWidth: 1, marginHorizontal: 10}}>
          <Text style={{alignSelf: 'center'}}>Upload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
