import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

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

function SideBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.items}>
          <Ionicons name='home' size={40} color='black' />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
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

export default SideBar;

