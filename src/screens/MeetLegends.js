import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const MeetLegends = () => {
  return (
    <View>
      <View style={styles.bodyCards}>
        <TouchableOpacity style={styles.box} onPress={() => alert("A")}>
          <View style={styles.inner}>
            <Text>Usuario</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => alert("A")}>
          <View style={styles.inner}>
            <Text>Usuario</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyCards: {
    height: 270,
    backgroundColor: "#261361",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    justifyContent: "space-between",
  },
  box: {
    backgroundColor: "black",
    width: "49%",
    height: 250,
    padding: 2,
  },
});
