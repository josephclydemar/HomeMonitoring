// import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import DoorControlButton from './sub_components/DoorControlButton';
import LightControlButton from './sub_components/LightControlButton';
import ImageCaptureButton from './sub_components/ImageCaptureButton';

const styles = StyleSheet.create({
    container: {
        padding: 40
    }
});

function Controls({ socket, isCaptureImage, setIsCaptureImage }) {

    return (
        <View>
            <DoorControlButton socket={socket} />
            <LightControlButton socket={socket} />
            <ImageCaptureButton socket={socket} isCaptureImage={isCaptureImage} setIsCaptureImage={setIsCaptureImage} />
        </View>
    );
}

export default Controls;