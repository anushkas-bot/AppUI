import 'react-native-gesture-handler';
import * as React from 'react';
import {Component, Fragment} from 'react';
import { useState, useEffect, useCallback } from 'react';
import { ScrollView, TextInput, Dimensions, Text, View, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, SafeAreaView, AppRegistry, Platform, StatusBar} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BarChart, LineChart, PieChart, Grid } from 'react-native-svg-charts';
import { Button, Menu, Divider, Provider, Searchbar, DataTable } from 'react-native-paper';
import {  Colors } from 'react-native/Libraries/NewAppScreen';
import Svg, { Polygon } from 'react-native-svg';
import SearchableDropdown from 'react-native-searchable-dropdown';
import DefaultScrollView from './DefaultScrollView';

import FusionCharts from 'react-native-fusioncharts';
import AppHeader from './AppHeader';

export default class Fusion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'timeseries',
      width: '100%',
      height: '100%',
      dataFormat: 'json',
      dataSource: {
        data: null,
        caption: {
          text: 'Sales Analysis'
        },
        subcaption: {
          text: 'Grocery'
        },
        yAxis: [
          {
            plot: {
              value: 'Grocery Sales Value',
              type: 'line'
            },
            format: {
              prefix: '$'
            },
            title: 'Sale Value'
          }
        ]
      },
      schemaJson: null,
      dataJson: null
    };

    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      ios: require('./assets/fusioncharts.html'),
      android: { uri: 'file:///android_asset/fusioncharts.html' }
    });
  }

  componentDidMount() {
    this.fetchDataAndSchema();
  }

  fetchDataAndSchema() {
    const jsonify = res => res.json();
    const dFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json'
    ).then(jsonify);
    // This is the remote url to fetch the schema.
    const sFetch = fetch(
      'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json'
    ).then(jsonify);
    Promise.all([dFetch, sFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      console.log(data);
      console.log(schema);
      this.setState({ dataJson: data, schemaJson: schema });
    });
  }

  render() {
    return (
      <View style={styles.fusionContainer}>
        <Text style={styles.heading}>
        </Text>
        <View style={styles.chartContainer}>
          <FusionCharts
            dataJson={this.state.dataJson}
            schemaJson={this.state.schemaJson}
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
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
 title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  styledContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textinputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 12,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: 'white',
    flex: 1,
    fontSize: 18,
  },
  svg: {
    aspectRatio: 1,
    backgroundColor: '#FF7B83',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  chartContainer: {
    height: 700
  },
  fusionContainer: {
    flex: 1,
    padding: 10
  },
  textArea: {
         height: 125,
         justifyContent: "flex-start"
       },
  button: {
         backgroundColor: '#007AFF',
         padding: 10,
         width: '30%',
         marginLeft: 258,
         height: 50,
         marginTop: 15
        }
});
