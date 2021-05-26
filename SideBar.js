import React, { Component } from 'react';
import { Text } from 'react-native';

import {Content} from 'native-base';
import Search from './SearchwDropdown';

/*export default class SideBar extends Component {
  render() {
    return (
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Text>Side Bar</Text>
          </Content>
    );
  }
}

module.exports = SideBar;*/

export default function SideBar () {

    return (
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Text>Side Bar</Text>
            <Search />
          </Content>
    );
}

module.exports = SideBar;
