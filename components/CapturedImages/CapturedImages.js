import { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';


function CapturedImages({ remoteCapturedImage }) {
    const [allCapturedImages, setAllCapturedImages] = useState(null);

    useEffect(() => {
        (axios.get('https://thesis-express-server.onrender.com/captured_images'))
        .then(response => {
            setAllCapturedImages(prev => response.data);
        });
    }, []);

    return (
        <View style={{
            backgroundColor: '#333',
            height: 500,
            width: 320,
            padding: 10,
            paddingTop: 20
        }}>
            <Text style={{
            fontSize: 40,
            fontWeight: 900,
            color: '#fff'
            }}>Home Warden</Text>
            {
            remoteCapturedImage !== null ?
                <Image 
                    style={{
                    width: 295,
                    height: 280,
                    resizeMode: 'contain',
                    }}
                    source={{
                    uri: `data:image/jpeg;base64,${remoteCapturedImage}`
                    }}/>
                : 
                <Text style={{
                fontSize: 25,
                fontWeight: 900,
                color: '#fff'
                }}>No Image</Text>
            }
            <View style={{
                width: 200,
                height: 300
            }}>
                <Button title='See more Captured Images' />
            </View>
        </View>
    );
}

export default CapturedImages;