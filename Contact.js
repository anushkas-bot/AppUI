import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const Contact = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isAboutTimerOn, setIsAboutTimerOn] = useState(false)
  const about = 'about'

  const advanceTime = () => {
        setIsAboutTimerOn(true)
        setTimeout(() => {
            let nSeconds = time.seconds;
            let nMinutes = time.minutes;
            let nHours = time.hours;

            nSeconds++;

            if (nSeconds > 59) {
                nMinutes++;
                nSeconds = 0;
            }
            if (nMinutes > 59) {
                nHours++;
                nMinutes = 0;
            }
            if (nHours > 24) {
                nHours = 0;
            }

            isAboutTimerOn && setTime({ seconds: nSeconds, minutes: nMinutes, hours: nHours });
        }, 1000);
        //console.log(time)
        //console.log(about)
    };

    const startTime = () => {
          advanceTime()
      }

      const stopTime = () => {
          setIsAboutTimerOn(false)
      }

      useEffect(() => {
            startTime()

            return () => {
                stopTime()
            }

        }, [startTime, stopTime])

  return (
    <View style={styles.container}>
      <Text style={styles.sectionContainer}>
        {`${time.hours < 10 ? '0' + time.hours : time.hours} : ${time.minutes < 10 ? '0' + time.minutes : time.minutes} : ${time.seconds < 10 ? '0' + time.seconds : time.seconds}`}
      </Text>
    </View>
  );
};

export const Contacts = () => {

  return (
    <View style={styles.container}>
      <Contact />
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    marginTop: 100,
    justifyContent: 'center'
  }
});

export default Contact;
