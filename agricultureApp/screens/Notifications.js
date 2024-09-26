import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import notifications from '../data/notifications'
import { Avatar, ListItem } from '@rneui/themed'
import { timeSinceFormatterTr } from '../functions/timeSince'

const Notifications = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#000' />
         <FlatList
         scrollEnabled
        data={notifications} 
        keyExtractor={(item) => item._id} 
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <Avatar rounded source={item.icon} />
            <ListItem.Content>
              <Text style={{fontWeight: '600', fontSize: 18}}>{item.title}</Text>
              <Text style={{fontSize: 14, color: 'grey'}}>{item.description}</Text>
              <Text style={{fontSize: 12, color: 'grey', paddingTop: 3}}>{timeSinceFormatterTr(item.date)}</Text>
            </ListItem.Content>
          </ListItem>
        )}
      />

    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 80
    }
})