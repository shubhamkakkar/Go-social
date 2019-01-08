import React, { Component } from "react";
import {
  Dimensions,
  ActivityIndicator,
  AsyncStorage,
  View,
  StyleSheet
} from "react-native";

import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Ionicons from "react-native-vector-icons/FontAwesome";

//Components
import Home from "./app/screens/HomeScreen/homeScreen";
import Map from "./app/screens/MapScreen/mapScreen";
import Profile from "./app/screens/ProfileScreen/profileScreen";
import Notifications from "./app/screens/NotificationScreen/notificationScreen";
import LoginSignup from "./app/screens/LoginSignupScreen/index";
import ChatList from "./app/screens/ChatListScreen/chatListScreen";

//Screen size
let { width } = Dimensions.get("window");
class AuthLoadingScreen extends Component {
  componentDidMount() {
    this._bootstrapAsync();
    console.log("line 31");
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

console.log("line 57");

const AuthStack = createStackNavigator(
  {
    LoginSignup
  },
  {
    headerMode: "none"
  }
);

const AppStack = createBottomTabNavigator(
  {
    Home,
    ChatList,
    Map,
    Notifications,
    Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Messages") {
          iconName = "comment";
        } else if (routeName === "Map") {
          iconName = "map";
        } else if (routeName === "Notifications") {
          iconName = "bell";
        } else if (routeName === "Profile") {
          iconName = "user";
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#3d9bf9",
      inactiveTintColor: "gray"
    }
  }
);

console.log("103");

const NavigationContainer = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const App = createAppContainer(NavigationContainer);

export default App;
