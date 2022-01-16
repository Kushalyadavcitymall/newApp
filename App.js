import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Componentscreen from "./src/screens/ComponentsScreen"
import Listi from "./src/screens/FlatList.js";
import Imageshow from "./src/screens/ImageScreen.js";
import counterscreen from "./src/screens/CounterScreen.js";
import colorscreencomponent  from "./src/screens/colorscreen.js";
import variablecolor from "./src/screens/variablecolorscreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    compoScreen: Componentscreen,
    ListScreen : Listi,
    Images: Imageshow,
    counter :counterscreen,
    colored: colorscreencomponent,
    varcolor: variablecolor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);


