import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, Input } from '@rneui/themed'

const LoginScreen = () => {
  return (
    <View style={styles.container}> 
      <StatusBar backgroundColor='#000' />

      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
        <Image source={require('../assets/images/Motat_logovertical.png')} style={{width: '60%', height: 370, resizeMode: 'contain'}} />
      </View>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center', paddingBottom: 10 }}>Giriş Yap</Text>
      </View>
    <View >
    <Input
                labelStyle={{fontSize: 13, paddingBottom: 5}}
                label='Email'
                underlineColorAndroid={'transparent'}
                leftIcon={{ type: 'fontisto', name: 'email', size: 20, color: '#000' }}
                inputContainerStyle={{ padding: 5, borderRadius: 5}}
                style={{marginStart: 10, fontSize: 14,}}
                selectionColor='#04364A'
              />
    </View>
      
              <View >
              <Input
                labelStyle={{fontSize: 13, paddingBottom: 5}}
                label='Password'
                underlineColorAndroid={'transparent'}
                leftIcon={{ type: 'feather', name: 'lock', size: 20, color: '#000' }}
                inputContainerStyle={{ padding: 5, borderRadius: 5}}
                style={{marginStart: 10, fontSize: 14,}}
                selectionColor='#04364A'
                rightIcon={
                    <Icon
                        type='material'
                        name={'visibility-off'}
                        size={20}
                        color='#000'
                    />
                }
                  />
              </View>
              <View>
                <TouchableOpacity style={styles.loginBtn}>
                  <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Giriş</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20
    },
    loginBtn: {
        backgroundColor: '#4BA26A',
        padding: 15,
        borderRadius: 7
      },
})