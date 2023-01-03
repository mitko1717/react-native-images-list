import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { Fotos } from "./src/components/Fotos";
import { FotoFullScreen } from "./src/components/FotoFullScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={Fotos} />
          <Stack.Screen name="Foto" component={FotoFullScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
