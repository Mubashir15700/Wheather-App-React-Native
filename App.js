import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <View className="flex-1">
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};
