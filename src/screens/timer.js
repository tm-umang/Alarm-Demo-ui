import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

const Data = [
  {
    id: '0',
    title: 'Lorem',
    time: '00:03.00',
  },
  {
    id: '1',
    title: 'Lorem',
    time: '00:03.00',
  },
  {
    id: '2',
    title: 'Lorem',
    time: '00:03.00',
  },
];

export default function Timer() {
  const [date, setDate] = useState(new Date());

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: '#EDEAEA',
          marginVertical: 6,
          paddingVertical: 6,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 323,
            marginVertical: 8,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ marginRight: 30, fontSize: 20 }}>{item.title}</Text>
          </View>
          <Text style={{ fontSize: 20 }}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
      <View style={{ paddingHorizontal: 22, flex: 1 }}>
        <View>
          <Text style={{ fontSize: 35, fontWeight: '500' }}>Timer</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <DatePicker date={date} mode="time" onDateChange={setDate} />
        </View>
        <View
          style={{ width: '100%', height: 1, backgroundColor: 'grey' }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{ fontSize: 18 }}>Preset</Text>
          <Text style={{ color: '#F85A29', fontSize: 18 }}>Add</Text>
        </View>
        <View>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100, marginTop: 20 }}
          />
        </View>
        <View style={{ alignSelf: 'center', position: 'absolute', bottom: 10 }}>
          <Image source={require('../assets/image/start.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
