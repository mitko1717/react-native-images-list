import { FC } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { IPhoto } from "../features/interfaces";

type FotoInfoProps = {
  foto: IPhoto;
  navigation: any;
  onPressOpen(params: IPhoto): void;
};

export const FotoInfo: FC<FotoInfoProps> = ({
  foto,
  navigation,
  onPressOpen,
}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Author: {foto.user.name}</Text>
      <Text style={styles.text}>{foto.alt_description}</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Foto");
          onPressOpen(foto);
        }}
      >
        <Image
          style={styles.image}
          source={{
            uri: foto.urls.small,
          }}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 15,
    paddingBottom: 5,
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
  image: {
    width: 250,
    height: 400,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
