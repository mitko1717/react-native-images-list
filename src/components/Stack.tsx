import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Fotos } from "./Fotos";
import { FotoFullScreen } from "./FotoFullScreen";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Fotos} />
        <Stack.Screen name="Foto" component={FotoFullScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
