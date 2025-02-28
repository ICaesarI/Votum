import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import { AppStack } from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <Tab.Navigator  
            initialRouteName="AppStack"
            screenOptions={{
                tabBarLabelPosition:"below-icon",
                tabBarActiveTintColor: "#194D3D", 
                tabBarInactiveBackgroundColor: "#194D3D",
                tabBarShowLabel:false,
                headerShown: false,
                tabBarStyle: {position:"absolute",borderTopWidth: 3, borderColor: "#194D3D",},
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="home" size={33} color={color} />
                ),
                }}    
        >
            <Tab.Screen name="AppStack" component={AppStack}/>
        </Tab.Navigator>
    )
}