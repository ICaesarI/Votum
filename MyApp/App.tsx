import "./gesture-handler" //NO MOVER, DEBE DE PERMANECER HASTA ARRIBA
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import {AuthStack, AppStack} from "./src/navigation/StackNavigator";
import { useState } from "react";
import TabNavigator from "./src/navigation/TabNavigator";
import PreviousVotesScreen from "./src/screens/PreviousVotesScreen/PreviousVotesScreen";
globalThis.isAuthenticathed = false
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
    
    //<PreviousVotesScreen/>
    //<HomeScreen/>
    //<LoginScreen/>
    //<CategoriesScreen/>
  );
}
