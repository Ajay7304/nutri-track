import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./app/navigation/AuthNavigator";
import DetailsNavigator from "./app/navigation/DetailsNavigator";
import AppNavigator from "./app/navigation/AppNavigator";


const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown:false}}>
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="DetailsNav" component={DetailsNavigator} />
        <RootStack.Screen name="App" component={AppNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
