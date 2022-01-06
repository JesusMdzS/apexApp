import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/octane.png")}
        // source={{
        //   // uri: "https://www.wptunnel.com/wp-content/uploads/2021/09/wptunnel-apex-legends-wallpaper-12.jpg",
        //   // uri: "https://p4.wallpaperbetter.com/wallpaper/608/949/179/simple-background-white-texture-white-background-wallpaper-preview.jpg",
        // }}
        style={styles.image}
        blurRadius={8}
      >
        <View style={styles.bottom}>
          <Image
            source={{
              uri: "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/4ea6a546c19499318091a9df40a13181.png",
            }}
            style={styles.image2}
          />
          <Text style={styles.tracker}>
            Unofficial apex legends application and tracker
          </Text>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("LegendScreen")}
          >
            <View>
              <Text style={styles.btn}>Get started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  image2: {
    marginLeft: "-20%",
    height: 150,
    resizeMode: "contain",
  },
  tracker: {
    fontSize: 18,
    color: "white",
    textAlign: "left",
    margin: 15,
    paddingRight: 10,
  },
  box: {
    borderRadius: 10,
    marginTop: "0%",
    marginLeft: "25%",
    height: 40,
    width: "50%",
    backgroundColor: "#00000060",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});
