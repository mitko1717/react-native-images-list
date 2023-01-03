import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { state } from "../features/fotosSlice";
import { useAppSelector } from "../app/hooks";

export const FotoFullScreen = () => {
  const { choosenFoto } = useAppSelector(state);

  return (
    <View>
      {Object.keys(choosenFoto || {}).length > 0 ? (
        <Image
          style={styles.image}
          source={{
            uri: choosenFoto?.urls.small,
          }}
        />
      ) : (
        <Text>FotoFullScreen</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
