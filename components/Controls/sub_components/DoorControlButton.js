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


function DoorControlButton({ socket }) {
    const [isOpenDoor, setIsOpenDoor] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.pressables, isOpenDoor === false ? styles.isBoxNotAffected : styles.isBoxAffected]}
                onPress={() => {
                    if(!isOpenDoor) {
                        socket.emit('door_control', 'open_DOOR');
                        setIsOpenDoor(prev => !prev);
                    } else {
                        socket.emit('door_control', 'close_DOOR');
                        setIsOpenDoor(prev => !prev);
                    }
                    // console.log('Open Door');
                }}>
                <Text style={[styles.texts, isOpenDoor === false ? styles.isBoxTextNotAffected : styles.isBoxTextAffected]}>{ isOpenDoor === false ? 'Open Door' : 'Close Door' }</Text>
            </Pressable>
        </View>
    );
}

export default DoorControlButton