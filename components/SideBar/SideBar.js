import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dd0',
    width: 80,
    paddingTop: 80
  },
  items: {
    margin: 20
  }
});

function SideBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home') }>
        <View style={styles.items}>
          <Ionicons name='home' size={40} color='black' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CapturedImagesScreen')}>
        <View style={styles.items}>
          <FontAwesome name='file-picture-o' size={40} color='black' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.items}>
          <Ionicons name='md-videocam' size={40} color='black' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.items}>
          {/* <Ionicons name='md-checkmark-circle' size={32} color='green' /> */}
          <Ionicons name='settings-sharp' size={40} color='black' />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default withNavigation(SideBar);

