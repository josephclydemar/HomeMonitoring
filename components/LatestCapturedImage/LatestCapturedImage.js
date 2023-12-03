import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

function LatestCapturedImage({ remoteCapturedImage, navigation }) {
    return (
        <View style={{
            backgroundColor: '#333',
            height: 440,
            width: 320,
            padding: 10,
            paddingTop: 20
        }}>
            <Text style={{
            fontSize: 40,
            fontWeight: 900,
            color: '#fff'
            }}>Home Warden</Text>
            <View style={{
                height: 290
            }}>
                { remoteCapturedImage !== null ?
                    <Image 
                        style={{
                        width: 285,
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
                    }}>No Image</Text> }
            </View>
            
            <View style={{
                width: 200,
                height: 300
            }}>
                <Button onPress={() => {
                    navigation.navigate('CapturedImagesScreen');
                }} title='See more Captured Images' />
            </View>
        </View>
    );
}

export default withNavigation(LatestCapturedImage);