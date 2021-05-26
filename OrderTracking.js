import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import Dash from 'react-native-dash';

export default function OrderTracking() {
  return (
    <View style={styles.container}>
       <TouchableOpacity
   style={{
       borderWidth:5,
       borderColor:'#0276FD',
       alignItems:'center',
       justifyContent:'center',
       width:48,
       height:48,
       backgroundColor:'#fff',
       borderRadius:50,
       marginTop: -100,
       marginLeft: 5,
     }}
 >
   <Text>1</Text>
 </TouchableOpacity>
      <Text style={styles.fixToText}>Delivery address</Text>
      <Dash dashGap={3} style={{width:1, height:80, flexDirection:'column', marginLeft: 30, dashColor: '#0276FD', marginTop: 5}}/>
      <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:48,
       height:48,
       backgroundColor:'#0276FD',
       borderRadius:50,
       marginTop: 0,
       marginLeft: 5
     }}
 >
   <Text>2</Text>
 </TouchableOpacity>
         <Text style={styles.fiToText}>Order summary</Text>
      <Dash dashGap={3} style={{width:1, height:80, flexDirection:'column', marginLeft: 30, dashColor: '#0276FD', marginTop: 5}}/>
      <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:48,
       height:48,
       backgroundColor:'#0276FD',
       borderRadius:50,
       marginTop: 0,
       marginLeft: 5
     }}
 >
   <Text>3</Text>
 </TouchableOpacity>
      <Text style={styles.fiToText}>Cart</Text>
      <Dash dashGap={3} style={{width:1, height:80, flexDirection:'column', marginLeft: 30, dashColor: '#0276FD', marginTop: 5}}/>
      <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:48,
       height:48,
       backgroundColor:'#0276FD',
       borderRadius:50,
       marginTop: 0,
       marginLeft: 5
     }}
 >
   <Text>4</Text>
 </TouchableOpacity>
      <Text style={styles.fiToText}>Payment method</Text>
      <Dash dashGap={3} style={{width:1, height:80, flexDirection:'column', marginLeft: 30, dashColor: '#0276FD', marginTop: 5}}/>
      <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:48,
       height:48,
       backgroundColor:'#0276FD',
       borderRadius:50,
       marginTop: 0,
       marginLeft: 5
     }}
 >
   <Text>5</Text>
 </TouchableOpacity>
      <Text style={styles.fiToText}>Track</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -23,
    marginLeft: 70,
    backgroundColor: '#ecf0f1',
    color: '#0276FD'
  },
  fiToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -23,
    marginLeft: 70,
    backgroundColor: '#ecf0f1',
    color: '#000000'
  },
});
