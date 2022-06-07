import React, { useState } from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Data = [
  { id: '0', count: '01.', duration: '00:03.00', increment: '+00:03.20' },
  { id: '1', count: '02.', duration: '00:03.00', increment: '+00:03.20' },
  { id: '2', count: '03.', duration: '00:03.00', increment: '+00:03.20' },
  { id: '3', count: '04.', duration: '00:03.00', increment: '+00:03.20' },
];

// importing library to use Stopwatch and Timer
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Images } from '../assets/image/images';

export default function StopWatch() {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={{ borderBottomWidth: 1, borderBottomColor: '#DBD8D8' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 340,
            marginVertical: 8,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ marginRight: 30, fontSize: 20 }}>{item.count}</Text>
            <Text style={{ marginRight: 30, fontSize: 20 }}>{item.duration}</Text>
          </View>
          <Text style={{ fontSize: 20 }}>{item.increment}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
      <View style={{ paddingHorizontal: 22, flex: 1 }}>
        <View>
          <Text style={{ fontSize: 35, fontWeight: '500' }}>Stop Watch</Text>
        </View>
        <View>
          <Image
            style={{
              height: 290,
              marginVertical: 32,
              width: 290,
              alignSelf: 'center',
            }}
            source={require('../assets/image/stopWatch.png')}
          />
        </View>
        <View style={styles.sectionStyle}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            // To start
            reset={resetStopwatch}
            // To reset
            options={options}
            // Options for the styling
            getTime={time => {
              console.log(time);
            }}
          />
          <View>
            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100, marginTop: 20 }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 220,
              position: 'absolute',
              top: 230,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
              }}>
              <Image source={require('../assets/image/reset.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}>
              <Image
                source={!isStopwatchStart ? Images.startTime : Images.pauseTime}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
              }}>
              <Image source={require('../assets/image/flag.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  text: {
    fontSize: 35,
    marginLeft: 7,
  },
};
