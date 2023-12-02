import { useState } from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'

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

function LightControlButton({ socket }) {
    const [isOnLight, setIsOnLight] = useState(false);

    return (
        <View style={{
            margin: 10
        }}>
            <Pressable 
                style={[styles.pressables, isOnLight === false ? styles.isBoxNotAffected : styles.isBoxAffected]}
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
                <Text style={[styles.texts, isOnLight === false ? styles.isBoxTextNotAffected : styles.isBoxTextAffected]}>{ isOnLight === false ? 'Turn On Lights' : 'Turn Off Lights' }</Text>
            </Pressable>
        </View>
    );
}

export default LightControlButton;