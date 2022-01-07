import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

export const MapsScreen = () => {
  const [user, setUser] = useState([]);

  const url =
    // "https://api.mozambiquehe.re/maprotation?version=2&auth=xtnWXNeh51LSTNtWX9jv";
    "https://api.mozambiquehe.re/news?lang=en-us&auth=xtnWXNeh51LSTNtWX9jv";
  // Get maps in rotation by axios async function
  const getMaps = async () => {
    await axios.get(url).then((res) => {
      console.log(res.data);
      setUser(res.data.battle_royale);
      console.log(user);
    });
  };
  // const getMaps = async () => {
  //   fetch(url).then((res) =>
  //     res.json().then((data) => {
  //       console.log(data);

  //       const mapaData = {
  //         map: data.arenas.current.map,
  //       };
  //       setMapas(mapaData);
  //     })
  //   );
  //   console.log(mapas.map);
  //   return <Text>{mapas.map}</Text>;
  // };

  // const listItems = () => {
  //   console.log(mapas.map);
  //   return <Text>{lugar.map}</Text>;
  // };

  // const listItems = mapas.map((mapaN) => (
  //   <View style={styles.container}>
  //     <View style={styles.mapContainer}>
  //       <View style={styles.map}>
  //         <Text>{mapaN.arenas.map}</Text>
  //       </View>
  //       <View style={styles.nextMap}></View>
  //     </View>
  //   </View>
  // ));

  useEffect(() => {
    getMaps();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.newsText}>Maps</Text>
        <Text style={styles.newsText}></Text>
        {/* {listItems} */}
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
  mapContainer: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "blue",
    width: "100%",
    alignSelf: "center",
  },
  map: {
    backgroundColor: "black",
    width: "100%",
    height: 250,
    borderRadius: 20,
  },
  nextMap: {
    backgroundColor: "black",
    width: "100%",
    height: 100,
    marginTop: 5,
    borderRadius: 20,
  },
});
