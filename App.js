import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from './responsiveFunc';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Abouts from './About';
import Contacts from './Contact';
import Fusion from './Fusion';
import EditProfile2 from './EditProfile2';
import Notifications from './Notifications';
import ComposePost from './Compose';
import Design from './Design';
import Profile from './Profile';
import PostUploaded from './Caption';
import Dashboard from './Dashboard'
import LinearGradient from 'react-native-linear-gradient'
import ProfileReport from './ProfileReport'
import PendingPayments from './PendingPayments'
import PublishYourBook from './PublishYourBook'
import OrderTracking from './OrderTracking'
import PackageTracking from './PackageTracking'
import Contest from './Contest'
import ContestTracking from './ContestTracking'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

/*const firstScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FirstPage"
        component={Abouts}
        options={{
          title: 'First Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};*/

const secondScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={EditProfile2}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const thirdScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerRight: () => (
          <Image style={{width: 30, height: 30, marginLeft: -90, marginRight: 20}} width={wp('5.5%')} source={require('./notificationIcon1.png')}/>
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ThirdPage"
        component={Notifications}
        options={{
          title: 'Notifications', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const fourthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FourthPage"
        component={ComposePost}
        options={{
          title: 'Compose', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

/*const fifthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FifthPage"
        component={Profile}
        options={{
          title: 'Design', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};*/

const sixthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SixthPage"
        component={PostUploaded}
        options={{
          title: 'Caption', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const seventhScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SixthPage"
        component={Dashboard}
        options={{
          title: 'Dashboard', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

/*const eigthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="EigthPage"
        component={ProfileReport}
        options={{
          title: 'Profile Report', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};*/

const ninthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="NinthPage"
        component={PendingPayments}
        options={{
          title: 'Profile Report', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

/*const tenthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="TenthPage"
        component={PublishYourBook}
        options={{
          title: 'Publish Book', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};*/

const eleventhScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="TenthPage"
        component={OrderTracking}
        options={{
          title: 'Order Tracking', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const twelfthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="TwelfthPage"
        component={PackageTracking}
        options={{
          title: 'Package Tracking', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const thirteenthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ThirteenthPage"
        component={Contest}
        options={{
          title: 'Contest', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const fourteenthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#3b91cd', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ThirteenthPage"
        component={ContestTracking}
        options={{
          title: 'Contest', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { padding: 0 },
        }}
        drawerContent={(props) => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames.filter(
                (routeName) => {
                  routeName !== 'HiddenPage1' && routeName !== 'HiddenPage2';
                }
              ),
              routes: props.state.routes.filter(
                (route) =>
                  route.name !== 'HiddenPage1' && route.name !== 'HiddenPage2'
              ),
            },
          };
          return (
            <DrawerContentScrollView {...filteredProps}>
              <DrawerItemList {...filteredProps} />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Second Page Option' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'Third Page Option' }}
          component={thirdScreenStack}
        />
        <Drawer.Screen
          name="FourthPage"
          options={{ drawerLabel: 'Fourth Page Option' }}
          component={fourthScreenStack}
        />
        <Drawer.Screen
          name="SixthPage"
          options={{ drawerLabel: 'Sixth Page Option' }}
          component={sixthScreenStack}
        />
        <Drawer.Screen
          name="SeventhPage"
          options={{ drawerLabel: 'Seventh Page Option' }}
          component={seventhScreenStack}
        />
        <Drawer.Screen
          name="NinthPage"
          options={{ drawerLabel: 'Ninth Page Option' }}
          component={ninthScreenStack}
          />
        <Drawer.Screen
          name="EleventhPage"
          options={{ drawerLabel: 'Eleventh Page Option' }}
          component={eleventhScreenStack}
          />
        <Drawer.Screen
          name="TwelfthPage"
          options={{ drawerLabel: 'Twelfth Page Option' }}
          component={twelfthScreenStack}
          />
        <Drawer.Screen
          name="ThirteenthPage"
          options={{ drawerLabel: 'Thirteen Page Option' }}
          component={thirteenthScreenStack}
          />
          <Drawer.Screen
            name="FourteenthPage"
            options={{ drawerLabel: 'Fourteenth Page Option' }}
            component={fourteenthScreenStack}
            />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
