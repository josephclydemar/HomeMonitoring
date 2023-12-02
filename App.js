import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import io from 'socket.io-client';

import SideBar from './components/SideBar/SideBar';
import Controls from './components/Controls/Controls';
import CapturedImages from './components/CapturedImages/CapturedImages';

const socket = io.connect('https://thesis-socketio-server.onrender.com');
// const socket = io.connect('http://192.168.1.6:8900');

export default function App() {
  const [remoteCapturedImage, setRemoteCapturedImage] = useState(null);
  const [isCaptureImage, setIsCaptureImage] = useState(false);

  useEffect(() => {
    socket.on('image_capture', (data) => {
      setRemoteCapturedImage(data);
      setIsCaptureImage(prev => false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <SideBar/>
      <View>
        <CapturedImages remoteCapturedImage={remoteCapturedImage} />
        <Controls socket={socket} isCaptureImage={isCaptureImage} setIsCaptureImage={setIsCaptureImage} />
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
