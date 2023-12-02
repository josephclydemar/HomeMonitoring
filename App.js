import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import CapturedImagesScreen from "./screens/CapturedImagesScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  CapturedImagesScreen: CapturedImagesScreen
}, {
  initialRouteName: 'Home'
}
);

export default createAppContainer(navigator);
