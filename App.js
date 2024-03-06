import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "./navigation/StackNavigation";
import { View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1">
        <StackNavigation />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};
