import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const WeatherTr = () => {

    const navigation = useNavigation()


  return (
    <View style={styles.card}>
    <Pressable onPress={() => navigation.navigate('Login')}>
    <LinearGradient
      colors={['#BEE3CB', '#9DD0AF', '#4BA26A']}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.gradient}
    >
      <View style={styles.content}>
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>29</Text>
          <Text style={styles.celsius}><MaterialCommunityIcons name="temperature-celsius" size={24} color="white" /></Text>
        </View>
        <Ionicons name="partly-sunny-outline" size={55} color="white" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>Prizren, Kosovo</Text>
        <Text style={styles.infoText}>Kısmen güneşli</Text>
      </View>
    </LinearGradient>
    </Pressable>
    
  </View>
  )
}

export default WeatherTr

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 10
      },
      gradient: {
        height: 150,
        padding: 20,
        borderRadius: 20,
      },
      content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      temperatureContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      temperature: {
        fontSize: 48,
        color: 'white',
        fontWeight: 'bold',
      },
      celsius: {
        fontSize: 24,
        color: 'white',
        position: 'relative',
        top: 10,
        right: 0,
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
  });
  