import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
