import { View, Text, Image, ScrollView } from "react-native";

function CapturedImages({ allCapturedImages }) {
    
    return (
        <ScrollView>
            { allCapturedImages.map((item) => {
                return (
                    <View key={item._id}>
                        <Image 
                            key={item._id}
                            style={{
                            width: 285,
                            height: 200,
                            resizeMode: 'contain',
                            }}
                            source={{
                            uri: `data:image/jpeg;base64,${item.b64_encoded_image}`
                            }}/>
                            <Text>{ item.createdAt }</Text>
                    </View>
                );
            }) }
        </ScrollView>
    );
}

export default CapturedImages;