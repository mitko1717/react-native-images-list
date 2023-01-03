import { FC, useEffect } from "react";
import { StyleSheet, ScrollView, View, TouchableHighlight } from "react-native";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { state, getFotos, setFotoToOpen } from "../features/fotosSlice";
import { FotoInfo } from "./FotoInfo";
import { IPhoto } from "../features/interfaces";

type FotosProps = {
  navigation: any;
};

export const Fotos: FC<FotosProps> = ({ navigation }) => {
  const { fotos } = useAppSelector(state);
  const dispatch = useAppDispatch();

  const onPressOpen = (foto: IPhoto) => {
    dispatch(setFotoToOpen(foto));
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
              <FotoInfo
                foto={foto}
                key={foto.id}
                navigation={navigation}
                onPressOpen={onPressOpen}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 50,
    paddingRight: 25,
    paddingBottom: 150,
    paddingLeft: 25,
  },
  container: {
    flex: 1,
    backgroundColor: "#221e1e",
    alignItems: "center",
    justifyContent: "center",
  },
});
