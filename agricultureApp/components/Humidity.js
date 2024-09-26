import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

const Humidity = () => {
  return (
    <View style={styles.card}>
          <LinearGradient
            colors={['#BEE3CB', '#9DD0AF', '#4BA26A']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.5 }}
            style={styles.gradient}
          >
            <View style={styles.rowContainer}>
              <View style={styles.content}>
                <SimpleLineIcons name="drop" size={35} color="white" />
                <View style={styles.temperatureContainer}>
                  <Text style={styles.temperature}>Humidity</Text>
                  <Text style={styles.temperature2}>62%</Text>
                </View>
              </View>
              <View style={styles.content}>
                <MaterialCommunityIcons name="weather-windy" size={35} color="white" />
                <View style={styles.temperatureContainer}>
                  <Text style={styles.temperature}>Wind Speed</Text>
                  <Text style={styles.temperature2}>Level 1</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
  )
}

export default Humidity

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 20,
      },
      gradient: {
        height: 150,
        padding: 20,
        borderRadius: 20,
      },
      rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
      },
      content: {
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      temperatureContainer: {
        flexDirection: 'column',
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      temperature: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 5,
      },
      temperature2: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
        marginHorizontal: 5,
      },
      celsius: {
        fontSize: 24,
        color: 'white',
      },
      info: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      infoText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
      },
})