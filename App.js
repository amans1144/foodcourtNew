import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SecondScreen from "./src/SecondScreen";
import HomeScreen from "./src/HomeScreen";
const navigation = createStackNavigator(
  {
    /* Navigating between screens  */
    Home: HomeScreen,
    SecondScreen: SecondScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Food Court",
    },
  }
);

export default createAppContainer(navigation);
