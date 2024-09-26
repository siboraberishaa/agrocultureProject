import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert, Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import WeatherTr from '../components/WeatherTr';
import HumidityTr from '../components/HumidityTr';

const HomeScreenTr = () => {
  const [opened, setOpened] = useState(true);
  const [ openCamera, setOpenCamera ] = useState(false)

  

  const waterPlants = () => {
    Alert.alert("Uyarı!", "Yarın yağmur yağacak. Sulama yapmak istediğinize emin misiniz?", [
      {
        text: "İptal",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Evet", onPress: () => Alert.alert("Başarılı!", "Sulama işlemi başlatıldı.") }
    ]);
  };

  const closeFields = () => {
    Alert.alert("Uyarı!", "Branda kapanıyor...",)

    setTimeout(() => {
      Alert.alert("Başarılı!", "Branda kapandı.");
    }, 3000);

    setOpened(false);
  };

  const openFields = () => {
    Alert.alert("Uyarı!", "Branda açılıyor...");

    setTimeout(() => {
      Alert.alert("Başarılı!", "Branda açıldı.");
    }, 3000);

    setOpened(true);
  };



  const openC = () => {
    setOpenCamera(prevCamera => !prevCamera)
  }


  return (
    <>
      <StatusBar backgroundColor='#000' />
      <View style={styles.container}>
        {openCamera ? <><View style={styles.container2}>
           
      
      <Image style={{resizeMode: 'contain', width: '100%'}} source={require('../assets/images/motat-camera2.png')} />
       
      </View>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: '#4BA26A', padding: 7}} >
            <Text style={{fontWeight: 'bold', color: '#fff'}}>Fotoğraf çek</Text>
        </TouchableOpacity>
      </View>
       </>:  
          <>
            <WeatherTr />
            <HumidityTr />
          </>}



        <Text style={styles.text}>Özellikler</Text>
        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          {opened ? (
            <View style={styles.btn}>
              <TouchableOpacity onPress={() => closeFields()}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image source={require('../assets/icons/tent-bw.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                <Text style={styles.btnText}>Brandayı kapat</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btn}>
              <TouchableOpacity onPress={() => openFields()}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image source={require('../assets/icons/tent-bw.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                <Text style={styles.btnText}>Brandayı aç</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => waterPlants()}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image source={require('../assets/icons/watering-bw.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                <Text style={styles.btnText}>Sulama yap</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>
        {openCamera ? <View style={styles.btn2}>
          <TouchableOpacity onPress={openC}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image source={require('../assets/icons/camera-bw.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                <Text style={styles.btnText}>Kamerayı kapat</Text>
            </View>
          </TouchableOpacity>
        </View> : 
        <View style={styles.btn2}>
          <TouchableOpacity onPress={openC}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Image source={require('../assets/icons/camera-bw.png')} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
                <Text style={styles.btnText}>Kamerayı aç</Text>
                </View>
          </TouchableOpacity>
        </View>}
      </View>
    </>
  );
};

export default HomeScreenTr;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,

  },
  btn: {
    width: '48%',
    backgroundColor: '#4ba26a',
    padding: 18,
    borderRadius: 7,
    display: 'flex'
  },
  btn2: {
    backgroundColor: '#4ba26a',
    padding: 17,
    borderRadius: 7,
    marginTop: 12,
    width: '50%',
    alignSelf: 'center'
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginStart: 12
  },
  container2: {
    height: 300,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '50%'
  },
  button: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4BA26A',
    
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
