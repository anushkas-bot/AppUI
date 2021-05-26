/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Text, Button, View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import { BarChart, LineChart, PieChart, Grid } from 'react-native-svg-charts';
import DefaultScrollView from './DefaultScrollView';

var items = [
    {
      type: '1',
      name: 'Bar'
    },
    { type: '2',
      name: 'Line'
    },
    { type: '3',
      name: 'Pie'
    }
];

const BarCharts = () => {
    const fill = 'rgb(134, 65, 244)'
    const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]
    return (
      <View style={styles.sectionContainer}>
        <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
          <Grid />
        </BarChart>
      </View>
    );
  };

  const LineCharts: () => React$Node = () => {
      const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
      return (
            <View style={styles.sectionContainer}>
              <LineChart
                  style={{ height: 200 }}
                  data={data}
                  svg={{ stroke: 'rgb(134, 65, 244)' }}
                  contentInset={{ top: 20, bottom: 20 }}
              >
                  <Grid />
              </LineChart>
            </View>
      );
    };

    const PieCharts: () => React$Node = () => {
      const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
      const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
      const pieData = data
              .filter((value) => value > 0)
              .map((value, index) => ({
                  value,
                  svg: {
                      fill: randomColor(),
                      onPress: () => console.log('press', index),
                  },
                  key: `pie-${index}`,
              }))
      return (
            <PieChart style={{ height: 200 }} data={pieData} />
      );
    };

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ],
      showBarChart: false,
      showLineChart: false,
      showPieChart: false,
    }
  }
  _setShowChart = (showBarChart) => this.setState({ showBarChart });
  _setShowLineChart = (showLineChart) => this.setState({ showLineChart });
  _setShowPieChart = (showPieChart) => this.setState({ showPieChart });
  render() {
    const { showBarChart } = this.state;
    const { showLineChart } = this.state;
    const { showPieChart } = this.state;
  return (
        <>
          <DefaultScrollView>
           <StatusBar barStyle="dark-content" />
            <SafeAreaView>
             <View style={styles.container}>
              {/* Single */}
              <SearchableDropdown
                placeholder="placheholder"
                onItemSelect={(item) => {
                  /*const items = this.state.selectedItems;
                  items.push(item)
                  this.setState({ selectedItems: items });
                  alert(item.type);*/
                  if (item.type =='1') {
                    //alert(item.type);
                    this._setShowChart(!showBarChart);
                  }
                  if (item.type =='2') {
                    this._setShowLineChart(!showLineChart);
                  }
                  if (item.type =='3') {
                    this._setShowPieChart(!showPieChart);
                  }
                }}
                containerStyle={{ padding: 5 }}
                onRemoveItem={(item, index) => {
                  const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                  this.setState({ selectedItems: items });
                }}
                textInputStyle={{
                //inserted text style
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#FAF7F6',
              }}
                itemStyle={{
                //single dropdown item style
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#bbb',
                borderWidth: 1,
              }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={items}
                defaultIndex={2}
                resetValue={false}
                textInputProps={
                  {
                    placeholder: "placeholder",
                    underlineColorAndroid: "transparent",
                    style: {
                        /*padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,*/
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1,
                    },
                    //onTextChange: text => alert(text)
                  }
                }
                listProps={
                  {
                    nestedScrollEnabled: true,
                  }
                }
            />
            {showBarChart && <BarCharts /> }
            {showLineChart && <LineCharts /> }
            {showPieChart && <PieCharts /> }
          </View>
         </SafeAreaView>
        </DefaultScrollView >
      </>
  );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default Search;
