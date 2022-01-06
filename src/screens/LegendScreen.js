import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const LegendScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/img/apexLogo.png")}
          style={styles.logo}
        />

        <View style={styles.carousel}>
          <Image
            source={require("../assets/img/octane.png")}
            // source={{
            //   uri: "https://image.pngaaa.com/491/4529491-middle.png",
            // }}
            style={styles.image}
          />
          <Text
            adjustsFontSizeToFit
            numberOfLines={2}
            style={styles.welcomeTextInfo}
          >
            Apex legends,now in your pocket
          </Text>
          <Image
            style={styles.imageAsh}
            source={{
              uri: "https://media.contentapi.ea.com/content/dam/apex-legends/common/escape/apex-section-bg-escape-season-keyart-xl.jpg.adapt.1920w.jpg",
            }}
          />

          <Text
            style={{
              fontSize: 35,
              color: "white",
              padding: 10,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            What to do?
          </Text>
          <View style={styles.cardContainer}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.card}>
                <ImageBackground
                  source={{
                    uri: "https://www.muycomputer.com/wp-content/uploads/2019/02/ApexLegends.jpg",
                  }}
                  resizeMode="cover"
                  imageStyle={{ borderRadius: 20 }}
                  style={styles.imageCard}
                >
                  <View style={styles.bottom}>
                    <Text style={styles.text}>Meet the legends</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.card}>
              <ImageBackground
                source={{
                  uri: "https://media.contentapi.ea.com/content/dam/apex-legends/common/legacy/maps/apex-media-maps-worlds-edge-xl-l-m.jpg.adapt.320w.jpg",
                }}
                resizeMode="cover"
                imageStyle={{ borderRadius: 20 }}
                style={styles.imageCard}
              >
                <View style={styles.bottom}>
                  <Text style={styles.text}>Check the maps</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "20%",
    height: 60,
    marginLeft: "2%",
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "#181818",
    flex: 1,
  },
  welcomeText: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "left",
    padding: 23,
  },
  welcomeTextInfo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    padding: 30,
    paddingRight: 50,
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    marginLeft: 120,
  },
  cardContainer: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "transparent",
    width: "95%",
    alignSelf: "center",
  },
  card: {
    width: "100%",
    marginTop: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    color: "#F3F3F3",
    fontSize: 30,
    padding: 5,
    fontWeight: "bold",
    textShadowColor: 5,
  },
  imageCard: {
    flex: 1,
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
});
