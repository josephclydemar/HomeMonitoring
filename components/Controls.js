import { View, Text } from 'react-native';

function Controls() {
    return (
        <View>
            <View>
                <Button title='Open Door' />
            </View>
            <View>
                <Button title='Lights' />
            </View>
        </View>
    );
}

export default Controls;