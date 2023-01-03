import { FC, useEffect } from "react";
import { StyleSheet, ScrollView, View, Button } from "react-native";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { state, getFotos } from "../features/fotosSlice";
import { FotoInfo } from "./FotoInfo";

import { createAppContainer } from "react-navigation"

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Fotos: FC = () => {
  const { fotos } = useAppSelector(state);
  const dispatch = useAppDispatch();

  const onPressLearnMore = () => {
    // dispatch(addTime(1));
  };

  const getFotosHandler = async () => {
    await dispatch(getFotos());
  };

  useEffect(() => {
    getFotosHandler();
  }, []);

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
      {fotos.length > 0 &&
        fotos.map((foto) => {
          return (
          <>
            <FotoInfo foto={foto} key={foto.id} />)
            {/* <Button title="Go to About" onPress={() => navigation.navigate("About")} /> */}
          </>
          )
        })}
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 50,
    paddingRight: 25,
    paddingBottom: 50,
    paddingLeft: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "#221e1e",
    alignItems: "center",
    justifyContent: "center",
  },
});
