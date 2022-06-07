import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Switch,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchComponent from '../component/switchComponent';


const Data = [
  {
    id: '0',
    time: '09:00',
    subTitle: 'All alarms turned off',
    status: 'PM',
  },
  {
    id: '1',
    time: '09:01',
    subTitle: 'All alarms turned off',
    status: 'PM',
  },
  {
    id: '2',
    time: '09:02',
    subTitle: 'All alarms turned off',
    status: 'PM',
  },
  {
    id: '3',
    time: '09:03',
    subTitle: 'All alarms turned off',
    status: 'PM',
  },
  {
    id: '4',
    time: '09:04',
    subTitle: 'All alarms turned off',
    status: 'PM',
  },
  // {
  //   id: '5',
  //   time: '09:04',
  //   subTitle: 'All alarms turned off',
  //   status: 'PM',
  // },
  // {
  //   id: '6',
  //   time: '09:04',
  //   subTitle: 'All alarms turned off',
  //   status: 'PM',
  // },
];

const styles = StyleSheet.create({
  timeBox: {
    backgroundColor: '#EDEAEA',
    // opacity:0.5,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    position: 'relative'
  },
  time: {
    fontSize: 33,
    fontWeight: '400',
    color: 'black',
  },
  timeSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    paddingTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 15,
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 35,
    paddingVertical: 13,
  },
  buttonOpen: {
    backgroundColor: '#F85A29',
    borderRadius: 12,
    alignSelf: 'center',
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 6,
    bottom: 16,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default function Alarm() {

  const [modalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState(new Date());
  const [text, onChangeText] = React.useState('');

  const handleDatePicker = () => {
    setModalVisible(true);
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.timeBox}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={{ paddingLeft: 2, color: 'grey' }}>{item.status}</Text>
          </View>
          <Text style={styles.timeSubtitle}>{item.subTitle}</Text>
        </View>
        {/* <Switch
          trackColor={{false: '#767577', true: '#03CF54'}}
          thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
        /> */}
        <SwitchComponent />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
      <View style={{ paddingHorizontal: 22, flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 35, fontWeight: '500' }}>Alarm</Text>
            <Text style={{ color: 'grey' }}>All alarms turned off</Text>
          </View>
          <View
            style={{
              backgroundColor: '#EDEAEA',
              height: 34,
              justifyContent: 'center',
              borderRadius: 12,
            }}>
            <Icon
              name="ellipsis-vertical"
              style={{ paddingHorizontal: 6, paddingVertical: 5 }}
              size={20}
            />
          </View>
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

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'black',
                    padding: 15,
                  }}>
                  <DatePicker date={date} mode="time" onDateChange={setDate} />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      marginBottom: 8,
                      marginTop: 20,
                    }}>
                    Ringtone
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#F3F3F5',
                      width: 290,
                      paddingHorizontal: 15,
                      paddingVertical: 15,
                      color: 'white',
                      borderRadius: 10,
                    }}
                    placeholder="user@gmail.com"
                    value={text}
                    onChangeText={onChangeText}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      marginBottom: 8,
                      marginTop: 10,
                    }}>
                    Alarm title
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: '#F3F3F5',
                      width: 290,
                      paddingHorizontal: 15,
                      paddingVertical: 15,
                      color: 'white',
                      borderRadius: 10,
                    }}
                    placeholder="Add Title"
                    value={text}
                    onChangeText={onChangeText}
                  />
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                  <Pressable
                    style={[
                      styles.button,
                      { backgroundColor: '#D9D9D9', marginRight: 20 },
                    ]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={[styles.textStyle, { color: 'black' }]}>
                      Cancel
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, { backgroundColor: '#212A35' }]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Save</Text>
                  </Pressable>
                </View>
              </View>
              <Image
                source={require('../assets/image/sape.png')}
                style={{
                  position: 'absolute',
                  bottom: 113,
                  width: 35,
                  height: 27,
                }}
              />
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => handleDatePicker()}>
            <Icon name="add" style={{ color: 'white' }} size={35} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
