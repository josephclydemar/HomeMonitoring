import { View, Text, Image, StyleSheet } from 'react-native';
import { elevation } from '../common/elevation';


const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 25,
        marginVertical: 15,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    elevation
});

function CategoryItem({ name, image }) {
    return (
        <View style={[styles.container, styles.elevation]}>
            <Text>{ name }</Text>
            <View>
                <Image 
                    source={image}/>
            </View>
        </View>
        );
}

export default CategoryItem