// import { useState, useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40
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
    }
});

function Controls({ socket }) {
    const [isOpenDoor, setIsOpenDoor] = useState(false);
    const [isOnLight, setIsOnLight] = useState(false);

    return (
        <View>
            <View style={{
                margin: 10
            }}>
                <Pressable 
                    style={[styles.pressables, isOpenDoor === false ? {
                        backgroundColor: '#A36DDE',
                    }: {
                        backgroundColor: '#105730'
                    }]}
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
                    <Text style={[styles.texts, isOpenDoor === false ? {
                        color: '#000'
                    } : {
                        color: '#fff'
                    }]}>{ isOpenDoor === false ? 'Open Door' : 'Close Door' }</Text>
                </Pressable>
            </View>
            <View style={{
                margin: 10
            }}>
                <Pressable 
                    style={[styles.pressables, isOnLight === false ? {
                        backgroundColor: '#A36DDE'
                    } : {
                        backgroundColor: '#105730'
                    }]}
                    onPress={() => {
                        if(!isOnLight) {
                            socket.emit('light_control', 'on_LIGHT');
                            setIsOnLight(prev => !prev);
                        } else {
                            socket.emit('light_control', 'off_LIGHT');
                            setIsOnLight(prev => !prev);
                        }
                        // console.log('Turn on Lights');
                    }}>
                    <Text style={[styles.texts, isOnLight === false ? {
                        color: '#000'
                    } : {
                        color: '#fff'
                    }]}>{ isOnLight === false ? 'Turn On Lights' : 'Turn Off Lights' }</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Controls;