import {Chart,LineChart,BarChart,PieChart,ProgressChart,ContributionGraph} from 'react-native-chart-kit'
import React, { Component } from 'react';
import {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, ImageBackground, Icon, FlatList, Button, TextInput, Dimensions, SafeAreaView, Picker, Alert } from 'react-native';

const initialData = [12, 19, 12, 25, 22, 10];
const initialFrom = "0"
const initialToMonth = "7"
const months = [
      { month: "Jan", value: "0" },
      { month: "Feb", value: "1" },
      { month: "Mar", value: "2" },
      { month: "April", value: "3" },
      { month: "May", value: "4" },
      { month: "June", value: "5" },
    ];
const initialLevelsArr = [
          "Jan",
          "Feb",
          "Mar",
          "April",
          "May",
          "June",
        ];
const initialLabels = ["Jan", "Feb", "Mar", "April", "May", "June"];

export default function FocusScreen() {

const [filterLimit, setfilterLimit] = useState(100);
const [lessThanOrGreaterThan, setlessThanOrGreaterThan] = useState("greaterThan");
const [datas, setDatas] = useState(initialData);
const [from, setFrom] = useState(initialFrom);
const [toMonth, setToMonth] = useState(initialToMonth);
const [labels, setLabels] = useState(initialLabels);

  const applyFilter = () => {
    const isLessThan = lessThanOrGreaterThan === "greaterThan";
    const value = filterLimit;
    // update instance variable
    const newDatas = initialData.map(v => {
    if (isLessThan ? v >= value : v <= value) return v;
        return 0;
    });

    setDatas(newDatas);
  }

  const applyDateFilter = () => {
      const newLabels = initialLevelsArr.slice(
        parseInt(from),
        parseInt(toMonth) + 1
      );
      const newDatas = initialData.slice(
        parseInt(from),
        parseInt(toMonth) + 1
      );

      setLabels(newLabels);
      setDatas(newDatas);
    }

const dataset = {
    labels: labels,
    datasets: [
      {
        data: datas,
        colors: [
          (opacity = 1) => `red`,
          (opacity = 1) => `blue`,
          (opacity = 1) => `yellow`,
          (opacity = 1) => `green`,
          (opacity = 1) => `purple`,
          (opacity = 1) => `orange`
        ]
      }
    ]
  }

return (
      <SafeAreaView style={styles.chartContainer}>
      <BarChart
              data={dataset}
              width={300}
              height={220}
              withCustomBarColorFromData={true}
              flatColor={true}
              fromZero={true}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                data: dataset.datasets,
                color: (opacity = 1) => '#fff',
                labelColor: () => '#6a6a6a',
              }}
            />
            <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          numeric
          placeholder="Filter Limit"
          value={filterLimit}
          onChangeText={text => setfilterLimit(text)}
        />
      </View>
    <View style={styles.pickerContainer}>
        <Picker
          selectedValue={lessThanOrGreaterThan}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setlessThanOrGreaterThan(itemValue)}
        >
          <Picker.Item label ="Greater Than" value="greaterThan" />
          <Picker.Item label="Less Than" value="lessThan" />
        </Picker>
      </View>
       <View style={styles.filterContainer}>
        <Button
          onPress={() => applyFilter()}
          title = "Apply Filter"
          color="#841584"
      />
      </View>
      <View style={styles.wrapper}>
            <View>
            <Button
              onPress={() => applyDateFilter()}
              title = "Apply DateFilter"
              color="#841584"
                />
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <Picker
                          selectedValue={from}
                          style={{ height: 50, width: 150, justifyContent: 'flex-start' }}
                          onValueChange={(itemValue, itemIndex) => setFrom(itemValue)}
                        >
                          <Picker.Item label ="Jan" value="0" />
                          <Picker.Item label="Feb" value="1" />
                          <Picker.Item label ="Mar" value="2" />
                          <Picker.Item label="Apr" value="3" />
                          <Picker.Item label ="May" value="4" />
                          <Picker.Item label="Jun" value="5" />
                        </Picker>
                    </View>
                    <View style={{flex:1}}>
                    <Picker
                      selectedValue={toMonth}
                      style={{ height: 50, width: 150, justifyContent: 'flex-start' }}
                      onValueChange={(itemValue, itemIndex) => setToMonth(itemValue)}
                    >
                      <Picker.Item label ="Jan" value="0" />
                      <Picker.Item label="Feb" value="1" />
                      <Picker.Item label ="Mar" value="2" />
                      <Picker.Item label="Apr" value="3" />
                      <Picker.Item label ="May" value="4" />
                      <Picker.Item label="Jun" value="5" />
                    </Picker>
                    </View>
                </View>
            </View>

        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  chartContainer: {
      flex: 1,
      backgroundColor: "#F5FCFF"
    },
container: {
flex: 1,
alignItems: 'center',
width: '100%',
height: '100%',
},
imageBackground: {
height: '100%',
width: '100%',
},
wrapper: {
borderWidth: 3,
borderColor: 'green',
flex: 1,
margin: '10%',
marginTop: '20%',
height: 40,
justifyContent: 'flex-end',
alignItems: 'stretch',

},

leftText: {
fontSize: 28,
},
pickerContainer: {
   paddingHorizontal: 24,
   marginLeft: 100
 },
  inputContainer: {
  marginTop: 12,
  paddingHorizontal: 24,
},
  filterContainer: {
  marginTop: 100,
  paddingHorizontal: 24,
},
wrapper: {
       padding: 10,
       backgroundColor: '#FFFFFF'
   },
})
