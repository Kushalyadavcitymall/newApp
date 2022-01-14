import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Componentscreen from "./src/screens/ComponentsScreen"
import Listi from "./src/screens/FlatList.js"
import Imageshow from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    compoScreen: Componentscreen,
    ListScreen : Listi,
    Images: Imageshow
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App", 
    },
  }
);

export default createAppContainer(navigator);
