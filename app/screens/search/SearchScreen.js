import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import { FontAwesome5 } from "@expo/vector-icons";

import Ripple from "react-native-material-ripple";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

import SearchBar from "../../components/Search/SearchBar";
import RecommendedCard from "../../components/Search/RecommendedCard";

import useFontsHook from "../../hooks/useFonts";
import useLocation from "../../hooks/useLocation";

const data = [
  {
    id: "1",
    title: "Greece",
    description: "Explore this magical place in Greece",
  },
  {
    id: "2",
    title: "Switzerland",
    description: "Explore this magical place in Switzerland",
  },
  {
    id: "3",
    title: "Italy",
    description: "Explore this magical place in Italy",
  },
];

const SearchScreen = () => {
  let [fontsLoaded] = useFontsHook();
  const [locationText] = useLocation();

  const [searchQuery, setSearchQuery] = useState("");

  if (!fontsLoaded || locationText === "") return <AppLoading />;
  else {
    return (
      <View style={styles.container}>
        <View style={styles.location}>
          <FontAwesome5 name="map-marker-alt" size={28} color={colors.ORANGE} />

          <View style={styles.locationText}>
            <Text style={globalStyles.headerBoldText}>
              {locationText.split(",")[0]}
            </Text>
            <Text style={globalStyles.headerText}>
              {"," + locationText.split(",")[1]}
            </Text>
          </View>
        </View>

        <View style={styles.nameContainer}>
          <Text style={globalStyles.headerText}>Hi</Text>
          <Text style={globalStyles.headerBoldText}> Alex,</Text>
        </View>

        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>
            Let's Discover a New Adventure!
          </Text>
        </View>

        <SearchBar sbText="Search your next flight" bdRadius={20} />

        <View style={styles.recommended_viewAll_Container}>
          <Text style={globalStyles.normalText}>Recommended</Text>

          <Ripple
            rippleColor={colors.PURPLE}
            rippleOpacity={0.8}
            rippleContainerBorderRadius={12}
            style={{ padding: 8 }}
            onLongPress={() => {}}
            delayLongPress={150}
          >
            <Text style={styles.viewAll}>View All</Text>
          </Ripple>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <RecommendedCard item={item} />;
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  location: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  locationText: {
    marginHorizontal: 10,
    flexDirection: "row",
  },
  nameContainer: {
    flexDirection: "row",
    alignContent: "center",
    ...globalStyles.marginHorizontal,
    marginVertical: 8,
  },
  recommended_viewAll_Container: {
    ...globalStyles.marginHorizontal,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sbContainerStyle: {
    marginHorizontal: 8,
    marginVertical: 14,
  },
  sbInputContainerStyle: {
    borderRadius: 26,
    backgroundColor: colors.SEARCH_CONTAINER,
  },
  sbInputStyle: {
    color: colors.SEARCH_INPUT_TEXT,
    ...globalStyles.normalText,
  },
  sbSearchIcon: {
    color: colors.PURPLE,
    paddingLeft: 6,
  },
  viewAll: {
    ...globalStyles.normalText,
    color: colors.ORANGE,
  },
  welcomeTextContainer: {
    ...globalStyles.marginHorizontal,
    marginVertical: 4,
  },
  welcomeText: {
    ...globalStyles.normalText,
    color: colors.GRAY_SUBHEADER_TEXT,
  },
});

export default SearchScreen;
