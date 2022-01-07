import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
  Linking,
} from "react-native";

export const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const url =
    "https://api.mozambiquehe.re/news?lang=en-us&auth=xtnWXNeh51LSTNtWX9jv";
  //   Get all news by axios async function
  const getNews = async () => {
    setLoading(true);
    await axios.get(url).then((res) => {
      setNews(res.data);
      setLoading(false);
    });
  };

  const listItems = news.map((noticia) => {
    return (
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => {
              Linking.openURL(noticia.link);
            }}
            style={styles.card}
            key={noticia.id}
          >
            <View>
              <Image
                style={styles.imgNew}
                source={{ uri: noticia.img }}
              ></Image>
              <Text style={styles.title}>{noticia.title}</Text>
              <Text style={styles.desc}>{noticia.short_desc}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  });

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.newsText}>Apex News</Text>
        {listItems}
        {isLoading === true ? (
          <View style={{ flex: 1, justifyContent: "center", marginTop: "50%" }}>
            <ActivityIndicator style={{ alignSelf: "center" }} size="large" />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  newsText: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    padding: 15,
  },
  cardsContainer: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "transparent",
    width: "100%",
    alignSelf: "center",
  },
  card: {
    backgroundColor: "black",
    width: "100%",
    height: 280,
    borderRadius: 20,
  },
  imgNew: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    padding: 10,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  desc: {
    color: "white",
    padding: 10,
  },
});
