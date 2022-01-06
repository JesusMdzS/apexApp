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
import { Carousel, CarouselP } from "../components/CarouselP";
import { useNavigation } from "@react-navigation/core";

export const LegendScreen = () => {
  const navigation = useNavigation();
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
          {/* <Image
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
          </Text> */}
          {/* here ends the first image and words */}

          <Text
            style={{
              fontSize: 33,
              color: "white",
              padding: 10,
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            What's new? Legend
          </Text>
          {/* CAROUSEL */}
          <CarouselP></CarouselP>
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
          {/* MENU */}

          <View style={styles.cardContainer}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => navigation.navigate("TrackerScreen")}
              >
                <ImageBackground
                  source={require("../assets/img/segundointento.png")}
                  resizeMode="cover"
                  imageStyle={{ borderRadius: 20 }}
                  style={styles.imageStat}
                >
                  <View style={styles.bottom}>
                    <Text style={styles.text}>Game tracker</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("NewsScreen")}
                style={styles.box}
              >
                <ImageBackground
                  source={{
                    uri: "https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/dark-depths/dark-depths-featured.jpg.adapt.crop16x9.431p.jpg",
                  }}
                  resizeMode="cover"
                  imageStyle={{ borderRadius: 20 }}
                  style={styles.imageStat}
                >
                  <View style={styles.bottom}>
                    <Text style={styles.text}>News</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate("MeetLegends")}
                style={styles.card}
              >
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

            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => navigation.navigate("MapsScreen")}
            >
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
    width: "100%",
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
  imageStat: {
    width: "100%",
    height: 150,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  bodyCards: {
    height: 270,
    backgroundColor: "#261361",
    padding: 5,
  },
  box: {
    backgroundColor: "black",
    width: "100%",
    borderRadius: 20,
    height: 150,
    marginTop: 10,
  },
});
