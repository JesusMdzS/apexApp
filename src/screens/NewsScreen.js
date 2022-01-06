import React, { useState } from "react";
import { Text, View } from "react-native";

export const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const url =
    "https://api.mozambiquehe.re/news?lang=en-us&auth=xtnWXNeh51LSTNtWX9jv";
  return (
    <View>
      <Text>Hola esto son las noticias</Text>
    </View>
  );
};
