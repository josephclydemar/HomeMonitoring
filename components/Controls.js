// import { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    pressables: {
        backgroundColor: '#f00',
        width: 200,
        padding: 20,
        borderRadius: 5
    },
    texts: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});

function Controls() {
    // const [openDoorPressed, setOpenDoorPressed] = useState(false);
    // const [openDoorOpacity, setOpenDoorOpacity] = useState(1);

    // useEffect(() => {
    //     if(openDoorPressed) {
    //         setOpenDoorOpacity(() => 0.5);
    //         setTimeout(() => {
    //             setOpenDoorOpacity(() => 1);
    //         }, 500);
    //     }
    //     console.log('HAHA');
    //     return () => {
    //         setOpenDoorPressed(() => false);
    //     };
    // }, [openDoorOpacity]);

    return (
        <View>
            <View style={{
                margin: 10
            }}>
                <Pressable 
                    style={styles.pressables}
                    onPress={() => {
                        console.log('Open Door');
                    }}>
                    <Text style={styles.texts}>Open Door</Text>
                </Pressable>
            </View>
            <View style={{
                margin: 10
            }}>
                <Pressable 
                    style={styles.pressables}
                    onPress={() => {
                        console.log('Turn on Lights');
                    }}>
                    <Text style={styles.texts}>Turn on Lights</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Controls;