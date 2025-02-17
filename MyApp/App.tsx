import "./gesture-handler" //NO MOVER, DEBE DE PERMANECER HASTA ARRIBA
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import {AuthStack, AppStack} from "./src/navigation/StackNavigator";
import { useState } from "react";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    /*<NavigationContainer>
      {isAuthenticated ?<AppStack/> : <AuthStack/>}
    </NavigationContainer>
    */
    //<HomeScreen/>
    <LoginScreen/>
    //<CategoriesScreen/>
  );
}
