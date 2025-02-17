import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
    Home: undefined,
    Login: undefined,
    Categories: undefined,
    Tabs: undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export function AuthStack(){
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export function AppStack(){
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Tabs" component={TabNavigator}/>
            <Stack.Screen name="Categories" component={CategoriesScreen}/>
        </Stack.Navigator>
    )
}