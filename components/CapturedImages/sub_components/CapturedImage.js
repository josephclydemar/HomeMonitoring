import { View, Text, Image } from "react-native";

function CapturedImage({ b64_encoded_image }) {
  return (
    <View style={{
        backgroundColor: '#333',
        height: 500,
        width: 320,
        padding: 10
    }}>
        <Image 
                style={{
                width: 200,
                height: 200,
                resizeMode: 'contain',
                }}
                source={{
                uri: `data:image/jpeg;base64,${b64_encoded_image}`
                }}/>
    </View>
  )
}

export default CapturedImage;