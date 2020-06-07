import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Points from "./pages/Points";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: styles.navigator }}
      >
        <AppStack.Screen component={Home} name="Home" />
        <AppStack.Screen component={Points} name="Points" />
        <AppStack.Screen component={Detail} name="Detail" />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: "#f0f0f5",
  },
});

export default Routes;
