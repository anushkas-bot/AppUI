import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ContestTracking from './ContestTracking';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Contest({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        1. Contest
      </Text>
      <Separator />
      <Text style={{textShadowColor: "rgba(255,255,255,0.8)",
            textShadowOffset: {
              width: 0,
              height: 0,
            },
            textShadowRadius: 10,
            fontSize: 14,
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#D3D3D3",
            fontSize: 28,
            marginLeft: 17
            }}
            onPress={() =>
              navigation.navigate('ContestTracking')
            }
            >
         1. Contest
        </Text>
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
    fontSize: 28,
    textAlign: 'center',
    marginLeft: -220,
    marginTop: -400
  },
  secondParagh: {
    margin: 24,
    fontSize: 28,
    textAlign: 'center',
    marginLeft: 0,
    marginTop: 0
  },
  separator: {
    marginVertical: 8,
    marginTop: -8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separatortwo: {
    marginVertical: 8,
    marginTop: 250,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
