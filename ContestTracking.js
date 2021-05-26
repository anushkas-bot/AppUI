import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Separator = () => (
  <View style={addItemStyles.separator} />
);

export default function ContestTracking() {
  return (
     <View style={addItemStyles.wrapper}>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Your Rank" style={{justifyContent: 'flex-start', marginTop: 50 }} />
                    </View>
                    <View style={{flex:1}}>
                        <TextInput placeholder="1" style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 50}} />
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Awards Received" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                    <View style={{flex:1}}>
                        <TextInput placeholder="1" style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 20}} />
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Number of Participants" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                    <View style={{flex:1}}>
                        <TextInput placeholder="1" style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 20}} />
                    </View>
                </View>
                <View style={{flexDirection:"row", marginTop: 200}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Other Winners" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Simon Mignolet" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                    <View style={{flex:1}}>
                        <Icon
                        name='hourglass-full'
                        color='#3b91cd'
                        style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 24}}
                      />
                    </View>
                    <Separator />
                </View>
                 <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Simon Mignolet" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                    <View style={{flex:1}}>
                        <Icon
                        name='hourglass-full'
                        color='#3b91cd'
                        style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 24}}
                      />
                    </View>
                    <Separator />
                </View>
                 <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Simon Mignolet" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                    <View style={{flex:1}}>
                        <Icon
                        name='hourglass-full'
                        color='#3b91cd'
                        style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 24}}
                      />
                    </View>
                    <Separator />
                </View>
                 <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Simon Mignolet" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                    <View style={{flex:1}}>
                        <Icon
                        name='hourglass-full'
                        color='#3b91cd'
                        style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 24}}
                      />
                    </View>
                    <Separator />
                </View>
                 <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                        <TextInput placeholder="Simon Mignolet" style={{justifyContent: 'flex-start', marginTop: 20}} />
                    </View>
                    <View style={{flex:1}}>
                        <Icon
                        name='hourglass-full'
                        color='#3b91cd'
                        style={{justifyContent: 'flex-end', marginLeft: 100, marginTop: 24}}
                      />
                    </View>
                    <Separator />
                </View>
            </View>
        </View>
  );
}

const addItemStyles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    inputLabels: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 7,
    },
    inputField: {
        backgroundColor: '#000000',
        padding: 10,
        color: '#000000',
        height: 50
    },
    inputWrapper: {
        paddingBottom: 20,
    },
    saveBtn: {
        backgroundColor: '#000000',
        alignItems: 'center',
        padding: 12,
    },
    saveBtnText: {
        color: '#000000',
        fontSize: 18,
    },
    separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
