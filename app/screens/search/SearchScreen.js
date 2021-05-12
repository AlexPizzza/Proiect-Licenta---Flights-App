import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Ripple from "react-native-material-ripple";

import { FontAwesome5 } from "@expo/vector-icons";

import RecommendedCard from "../../components/search/RecommendedCard";
import SearchBar from "../../components/common/SearchBar";
import CustomSearchFlightsModal from "../../components/common/CustomSearchFlightsModal";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

import { Context as UserContext } from "../../context/UserContext";
import { auth } from "../../config/firebase";

import useLocation from "../../hooks/useLocation";
import useCountriesResults from "../../hooks/useCountriesResults";

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

const SearchScreen = ({ navigation }) => {
  // const [results, errorMessage] = useCountriesResults();
  const { state } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);

  let [locationText] = useLocation();

  return (
    <View style={styles.container}>
      <CustomSearchFlightsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        screen="Search Screen"
      />
      <View style={styles.location}>
        <FontAwesome5 name="map-marker-alt" size={28} color={colors.ORANGE} />

        <View style={styles.locationText}>
          <Text style={globalStyles.headerBoldText}>
            {state.userLocation !== undefined
              ? state.userLocation.split(",")[0]
              : locationText.split(",")[0]}
            ,
          </Text>
          <Text style={globalStyles.headerText}>
            {state.userLocation !== undefined
              ? state.userLocation.split(",")[1]
              : locationText.split(",")[1]}
          </Text>
        </View>
      </View>

      <View style={styles.nameContainer}>
        <Text style={globalStyles.headerText}>Hi</Text>
        <Text style={globalStyles.headerBoldText}>
          {" "}
          {auth.currentUser.displayName.split(" ")[0]},
        </Text>
      </View>

      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Let's Discover a New Adventure!</Text>
      </View>

      <SearchBar
        sbText="Search your next flight"
        bdRadius={20}
        onPress={() =>
          // navigation.navigate("SearchFlights", {
          //   screenName: "SearchScreen",
          // })
          setModalVisible(true)
        }
      />

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

      {/* {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          // data={results}
          // keyExtractor={(item) => item.country_iso_numeric}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <RecommendedCard item={item} />;
          }}
        />
      )} */}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRat={0.8}
        data={data}
        // data={results}
        // keyExtractor={(item) => item.country_iso_numeric}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <RecommendedCard item={item} />;
        }}
      />
    </View>
  );
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
