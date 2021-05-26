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

const Stack = createStackNavigator();

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Search} />
        <Stack.Screen name="Drop" component={Dropdown} />
        <Stack.Screen name="Input" component={BarInput} />
        <Stack.Screen name="Table" component={Table} />
        <Stack.Screen name="Fusion" component={Fusion} />
        <Stack.Screen name="Searchable" component={Searchable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.styledContainercontainer}>
    <View>
      <Button mode="contained" onPress={() =>
        navigation.navigate('Drop', { name: 'Jane' })
      }>
      Search
    </Button>
    </View>
    <Separator />
    <View>
      <Button mode="contained" onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }>
      Search w/Dropdown
    </Button>
    </View>
    <Separator />
    <View>
      <Button mode="contained" onPress={() =>
        navigation.navigate('Searchable', { name: 'Jane' })
      }>
      Searchable
    </Button>
    </View>
    <Separator />
    <View>
      <Button mode="contained" onPress={() =>
        navigation.navigate('Input', { name: 'Jane' })
      }>
      Input
    </Button>
    </View>
    <Separator />
    <View>
      <Button mode="contained" onPress={() =>
        navigation.navigate('Table', { name: 'Jane' })
      }>
      Table
    </Button>
    </View>
    <Separator />
    <View>
      <Button mode="contained" onPress={() =>
        navigation.navigate('Fusion', { name: 'Jane' })
      }>
      Fusion
    </Button>
    </View>
   </SafeAreaView>
  );
};

const restaurantList = [
  {
    type: '1',
    name: 'Item'
  },
  { type: '2',
    name: 'Item'
  },
  { type: '3',
    name: 'Item'
  }
];

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

  static navigationOptions = {
    title: 'Search for Restaurants'
  };
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      data: restaurantList,
      error: null,
      value: '',
    };
    this.arrayholder = [];
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text
    });

    const newData = restaurantList.filter(item => {
      console.log(item.type)
      const itemData = `${item.name.toUpperCase()} ${item.type.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });

    this.setState({
      data: newData
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type..."
        value={this.state.value}
        onChangeText={text => this.searchFilterFunction(text)}
        onFocus={()=>this.setState({showList: true})} // <---
        onBlur={()=>this.setState({showList: false})} // <---
      />
    );
  };

  render () {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
       <Provider>
       <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <View style={styles.container}>
            <View>{this.renderHeader()}</View>
            {
               this.state.showList && <FlatList
                 keyExtractor={(item, index) => `${index}`}
                 extraData={this.state}
                  data={this.state.data}
                 renderItem={({ item }) => (
                    <Text>{item.name} {item.type}</Text>
                 )}
                 ItemSeparatorComponent={this.renderSeparator}
                 />
            }
          </View>
        </View>
      </Provider>
      );
    }
  }
}

const Dropdown = () => {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [barClicked, setbarClicked] = React.useState(false);
  const [lineClicked, setlineClicked] = React.useState(false);
  const [pieClicked, setpieClicked] = React.useState(false);

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

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Show menu</Button>}>
            <Menu.Item onPress={() => setbarClicked(!barClicked)} title="Item 1" />
            <Menu.Item onPress={() => setlineClicked(!lineClicked)} title="Item 2" />
            <Menu.Item onPress={() => setpieClicked(!pieClicked)} title="Item 3" />
          </Menu>
        </View>
        <View>
          <Button onPress={() => setbarClicked(!barClicked)}></Button>
          {barClicked && <BarCharts />}
          <Button onPress={() => setlineClicked(!lineClicked)}></Button>
          {lineClicked && <LineCharts />}
          <Button onPress={() => setpieClicked(!pieClicked)}></Button>
          {pieClicked && <PieCharts />}
       </View>
       <View style={styles.container}>
       </View>
    </Provider>
  );
};

function Input() {
  const windowWidth = Dimensions.get('window').width;
  const Center = windowWidth / 2;
  const Radius = Center - 20;

  const [numSides, setNumSides] = useState(3);
  const [polygonPoints, setPolygonPoints] = useState();

  useEffect(() => {
    let newPolyPoints = '';
    const angle = 2 * Math.PI / numSides;
    for (let side = 0; side < numSides; side++) {
      const x = Math.cos(angle * side) * Radius + Center;
      const y = Math.sin(angle * side) * Radius + Center;
      newPolyPoints = `${newPolyPoints} ${x},${y}`;
    }
    setPolygonPoints(newPolyPoints);
  }, [numSides]);

  const inputIsValid = t => {
    const int = parseInt(t, 10);
    return isNaN(int) === false && int >= 3;
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textinputContainer}>
        <Text style={styles.label}>
          {'Number of sides: '}
        </Text>
        <TextInput
          style={styles.textInput}
          defaultValue={numSides.toString()}
          selectTextOnFocus
          onChangeText={t => {
            if (inputIsValid(t)) {
              const int = parseInt(t, 10);
              setNumSides(int);
            }
          }}
        />
      </View>
      <Svg style={styles.svg} width={windowWidth} height={windowWidth}>
        <Polygon
          points={polygonPoints}
          fill="#98FFFE"
          stroke="purple"
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
}

class Fusion extends Component {
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

const Table = () => (
   <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Frozen yogurt</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
          <DataTable.Cell numeric>6.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
  </View>
);

class Searchable extends React.Component {
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

function BarInput() {

        const fill = 'rgb(134, 65, 244)'
        const [data, setData] = useState([50,10])
        const [newData, setnewData] = useState(0)

        useEffect(() => {

        })

        const updateArray = useCallback(()=>{
           setData(data => data.concat(parseInt(newData)))
        }, [setData, newData])

        return (
          <View>
            <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>
            <Text></Text>
            <TextInput
                   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                   underlineColorAndroid="transparent"
                   numberOfLines={1}
                   autoCapitalize="none"
                   value={newData}
                   onChangeText={(newData) => setnewData(newData)}
                 />
                 <TouchableOpacity style={styles.button} onPress={updateArray}>
                      <Text>Apply</Text>
                    </TouchableOpacity>

        </View>
        )
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

export default App;
