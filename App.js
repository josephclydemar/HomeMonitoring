import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, FlatList } from 'react-native';
import Contents from './components/Contents';
import Controls from './components/Controls';
import io from 'socket.io-client';

const socket = io.connect('https://socketiopractice.onrender.com');



export default function App() {
  const [remoteData, setRemoteData] = useState(null);

  useEffect(() => {
    console.log(remoteData);
  }, [remoteData]);


  useEffect(() => {
    socket.on('message', (data) => {
      setRemoteData(data);
    });
  }, []);

  return (
    <View>
      <Text>Embedded App</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
