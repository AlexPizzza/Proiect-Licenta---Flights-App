import React, { useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CarouselItem from "./CarouselItem";

const { width, height } = Dimensions.get("window");

const Carousel = ({ data }) => {
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
        />
      </View>
    );

    console.log("Please provide images");
    return null;
  }
};

const styles = StyleSheet.create({});

export default Carousel;
