import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import RecommendedScreenCard from "../../components/recommendedScreen/RecommendedScreenCard";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

const data = [
  {
    id: "1",
    country_name: "Greece",
    description: "Explore the beauty and magic of Greece",
    image: "https://cdn.statically.io/img/wallpaperaccess.com/full/42013.jpg",
  },
  {
    id: "2",
    country_name: "Switzerland",
    description: "Enjoy the mountains of Switzerland",
    image: "https://wallpaperaccess.com/full/1094090.jpg",
  },
  {
    id: "3",
    country_name: "France",
    description: "Enjoy the unique diversity of France",
    image:
      "https://free4kwallpapers.com/uploads/originals/2016/09/30/romance-paris,-france-4k-wallpaper.jpg",
  },
  {
    id: "4",
    country_name: "Spain",
    description: "Plan your next vacation in Spain",
    image: "https://wallpapercave.com/wp/wp3766461.jpg",
  },
  {
    id: "5",
    country_name: "United Kingdom",
    description: "Explore United Kingdom's architecture and history",
    image:
      "https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdGVkJTIwa2luZ2RvbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const RecommendedScreen = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        decelerationRat={0.8}
        data={data}
        // data={results}
        // keyExtractor={(item) => item.country_iso_numeric}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <RecommendedScreenCard item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecommendedScreen;
