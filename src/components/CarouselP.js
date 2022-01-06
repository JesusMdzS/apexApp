import React, { useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

export const CarouselP = () => {
  const Imagess = ({ item }) => {
    return (
      <View style={styles.carouselItemContainer}>
        <TouchableOpacity
          activeOpacity={10}
          underlayColor="transparent"
          onPress={() => alert("Pressed!")}
        >
          <ImageBackground
            borderRadius={20}
            style={styles.img}
            source={{
              uri: `${item.image}`,
            }}
          ></ImageBackground>
          <Text style={{ color: "white", fontSize: 20 }}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const IMAGES = [
    {
      title: "New Season: Scape",
      image:
        "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ApexLegends_SeasonBanner_image1600w.jpg",
    },
    {
      title: "New Map :StormPoint",
      image:
        "https://as01.epimg.net/meristation/imagenes/2021/10/28/avances/1635422362_387169_1635422509_sumario_normal.jpg",
    },
    {
      title: "New gun :Car SMG",
      image:
        "https://areajugones.sport.es/wp-content/uploads/2021/10/car-smg-apex-legends.jpg",
    },
    {
      title: "New event: Dark Deepths",
      image:
        "https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/dark-depths/dark-depths-featured.jpg.adapt.crop16x9.575p.jpg",
    },
  ];

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop={true}
        data={IMAGES}
        autoplay={true}
        layout={"default"}
        sliderWidth={300}
        itemWidth={300}
        renderItem={Imagess}
      ></Carousel>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 180,
    borderRadius: 20,
    resizeMode: "contain",
  },
  carouselContainer: {
    padding: 10,
  },
  carouselItemContainer: {
    borderRadius: 10,
  },
});
