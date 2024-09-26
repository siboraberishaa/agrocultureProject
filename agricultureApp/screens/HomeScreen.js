import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native';
import Weather from '../components/Weather';
import Humidity from '../components/Humidity';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Octicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const [opened, setOpened] = useState(true);
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [ openCamera, setOpenCamera ] = useState(false)

  

  const waterPlants = () => {
    Alert.alert("Warning!", "It will rain tomorrow. Are you sure you want to water the plants?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => Alert.alert("Success!", "Watering plants has started") }
    ]);
  };

  const closeFields = () => {
    Alert.alert("Alert!", "Fields have started closing");

    setTimeout(() => {
      Alert.alert("Success!", "Fields have closed successfully");
    }, 3000);

    setOpened(false);
  };

  const openFields = () => {
    Alert.alert("Alert!", "Fields have started opening");

    setTimeout(() => {
      Alert.alert("Success!", "Fields have opened successfully");
    }, 3000);

    setOpened(true);
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const openC = () => {
    setOpenCamera(prevCamera => !prevCamera)
  }


  return (
    <>
      <StatusBar backgroundColor='#000' />
      <View style={styles.container}>
        {openCamera ? <View style={styles.container2}>
      <CameraView style={styles.camera} facing={facing} >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.text2}><Octicons name="dot-fill" size={130} color="#fff" /></Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View> :  
          <>
            <Weather />
            <Humidity />
          </>}



        <Text style={styles.text}>Main features</Text>
        <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          {opened ? (
            <View style={styles.btn}>
              <TouchableOpacity onPress={() => closeFields()}>
                <Text style={styles.btnText}>Close the fields</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btn}>
              <TouchableOpacity onPress={() => openFields()}>
                <Text style={styles.btnText}>Open the fields</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => waterPlants()}>
              <Text style={styles.btnText}>Water the plants</Text>
            </TouchableOpacity>
          </View>
        </View>
        {openCamera ? <View style={styles.btn2}>
          <TouchableOpacity onPress={openC}>
            <Text style={styles.btnText}>Close the camera</Text>
          </TouchableOpacity>
        </View> : 
        <View style={styles.btn2}>
          <TouchableOpacity onPress={openC}>
            <Text style={styles.btnText}>Open the camera</Text>
          </TouchableOpacity>
        </View>}
      </View>
    </>
  );
};

export default HomeScreen;

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
    backgroundColor: '#4ba26a',
    padding: 20,
    borderRadius: 7
  },
  btn2: {
    backgroundColor: '#4ba26a',
    padding: 20,
    borderRadius: 7,
    marginTop: 12,
    width: '50%',
    alignSelf: 'center'
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  container2: {
    height: 350,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
