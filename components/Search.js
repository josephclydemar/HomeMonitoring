import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/elevation';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: '#fff',
        borderRadius: 40
    },
    textInput: {
        fontSize: 18,
        padding: 10
    },
    elevation
});

function Search() {
    const [search, setSearch] = useState('');
    useEffect(() => {
        console.log(search);
    }, [search]);

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome 
                name='search'
                size={25}
                style={{
                    margin: 10
                }}/>
            <TextInput 
                onChange={(e) => setSearch(e.nativeEvent.text)}
                style={styles.textInput}
                placeholder='Restaurants, food'/>
        </View>
    );
}

export default Search;