import React from 'react';
import { ActivityIndicator, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get("window");

const Loader = (props) => {
   let theme = props.themeColor;
   let textColor = theme == "dark" ? "#fff" : "#5A6E7E"
    return(
        <View style={{width: '100%', height, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)', position: 'absolute', top: 0, left: 0}} >
            <ActivityIndicator size="large" color={textColor} />
        </View>
    )
}

const mapStateToProps = state => {
    return {
      themeColor: state.auth.themeColor
    };
  }

export default connect(mapStateToProps)(Loader);
