import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import SearchBar from "../../components/common/SearchBar";

import globalStyles from "../../../global/globalStyles";
import colors from "../../../global/colors";

import ExploreEverywhereCard from "../../components/explore/ExploreEverywhereCard";
import ExploreBasicCard from "../../components/explore/ExploreBasicCard";
import CustomModal from "../../components/common/CustomModal";

const data = [
  {
    id: "1",
    title: "Popular Destinations",
  },
  {
    id: "2",
    title: "Quick Getaways",
  },
  {
    id: "3",
    title: "Longer Trips",
  },
  {
    id: "4",
    title: "Last Minute",
  },
  {
    id: "5",
    title: "Plan Ahead",
  },
];

const ExploreScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        screen="Explore Screen"
      />

      <View style={styles.headerContainer}>
        <Text style={styles.profileHeaderText}>Explore</Text>
      </View>

      <SearchBar
        sbText="Find your next destination"
        bdRadius={8}
        marginBottom={22}
        onPress={() =>
          // navigation.navigate("SearchFlights", {
          //   screenName: "ExploreScreen",
          // })
          setModalVisible(true)
        }
      />

      <ExploreEverywhereCard />

      <View style={styles.recommendedDestinationsContainer}>
        <Text style={styles.recommendedText}>Recommended Destinations</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 14 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ExploreBasicCard item={item} />;
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG_COLOR,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    ...globalStyles.marginHorizontal,
  },
  profileHeaderText: {
    ...globalStyles.headerBoldText,
    fontSize: 40,
  },
  recommendedDestinationsContainer: {
    ...globalStyles.marginHorizontal,
    marginVertical: 16,
  },
  recommendedText: {
    ...globalStyles.normalText,
    color: "black",
  },
});

export default ExploreScreen;
