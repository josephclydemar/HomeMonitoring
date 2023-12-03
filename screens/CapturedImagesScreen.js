import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

import SideBar from '../components/SideBar/SideBar';
import CapturedImages from '../components/CapturedImages/CapturedImages';

function CapturedImagesScreen() {
    const [allCapturedImages, setAllCapturedImages] = useState(null);

    useEffect(() => {
        axios.get('https://thesis-express-server.onrender.com/captured_images')
        .then(response => {
            setAllCapturedImages(prev => response.data);
        }).catch(error => {
            console.log(error.message);
            setAllCapturedImages(prev => null);
        });
    }, []);


    return (
        <View style={styles.container}>
            <SideBar />
            <View style={{
                marginLeft: 10
            }}>
                { allCapturedImages !== null ? <CapturedImages allCapturedImages={allCapturedImages} /> : <Text>No Captured Images</Text> }
            </View>
        </View>
    );
}

export default CapturedImagesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'left'
    }
});