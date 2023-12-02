import { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    pressables: {
        width: 200,
        padding: 20,
        borderRadius: 5
    },
    texts: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center'
    },
    isBoxAffected: {
        backgroundColor: '#293638'
    },
    isBoxNotAffected: {
        backgroundColor: '#A36DDE'
    },
    isBoxTextAffected: {
        color: '#fff'
    },
    isBoxTextNotAffected: {
        color: '#000'
    }
});



function ImageCaptureButton({ socket, isCaptureImage, setIsCaptureImage }) {
    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.pressables, isCaptureImage === false ? styles.isBoxNotAffected : styles.isBoxAffected]}
                onPress={() => {
                    socket.emit('capture_image', 'capture_front_door_image');
                    setIsCaptureImage(prev => true);
                }}>
                <Text style={[styles.texts, isCaptureImage === false ? styles.isBoxTextNotAffected : styles.isBoxTextAffected]}>{ isCaptureImage === false ? 'Capture Image' : 'Capturing Image...' }</Text>
            </Pressable>
        </View>
    );
}

export default ImageCaptureButton;