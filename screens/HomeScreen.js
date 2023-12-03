import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';

import SideBar from '../components/SideBar/SideBar';
import Controls from '../components/Controls/Controls';
import LatestCapturedImage from '../components/LatestCapturedImage/LatestCapturedImage';

let socket = null;
try {
    socket = io.connect('https://thesis-socketio-server.onrender.com');
} catch(err) {
    socket = null;
}
// const socket = io.connect('http://192.168.1.6:8900');


function HomeScreen() {
    const [remoteCapturedImage, setRemoteCapturedImage] = useState(null);
    const [isCaptureImage, setIsCaptureImage] = useState(false);

    useEffect(() => {
        if(socket !== null) {
            socket.on('image_capture', (data) => {
                setRemoteCapturedImage(data);
                setIsCaptureImage(prev => false);
            });
        }
    }, []);
    return (
        <View style={styles.container}>
            { socket !== null ?
            <>
                <SideBar/>
                <View>
                    <LatestCapturedImage remoteCapturedImage={remoteCapturedImage} />
                    <Controls socket={socket} isCaptureImage={isCaptureImage} setIsCaptureImage={setIsCaptureImage} />
                </View>
            </> : <Text>Network Problem</Text> }
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'left'
    },
});