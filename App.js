import { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import io from 'socket.io-client';

import SideBar from './components/SideBar';
import Controls from './components/Controls';

const socket = io.connect('https://socketiopractice.onrender.com');

export default function App() {
  const [remoteData, setRemoteData] = useState(null);

  useEffect(() => {
    if(remoteData !== null) {
      console.log(remoteData.split(' ')[1]);
    }
  }, [remoteData]);


  useEffect(() => {
    socket.on('message', (data) => {
      setRemoteData(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <SideBar/>
      <View>
        <View style={{
          backgroundColor: '#0f0',
          height: 600,
          width: 320,
          padding: 15,
          paddingTop: 40
        }}>
          <Text style={{
            fontSize: 40,
            fontWeight: 900
          }}>HomeWarden</Text>
          {
            remoteData !== null ?
              <Image 
              style={{
                width: 280,
                height: 280,
                resizeMode: 'contain',
              }}
              source={{
                uri: `data:image/jpeg;base64,${remoteData.split(' ')[1]}`
              }}/>
              : 
              <Text style={{
                fontSize: 25,
                fontWeight: 900
              }}>No Image</Text>
          }
        </View>
        <Controls />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'left'
  },
});
