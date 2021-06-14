import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Ripple from "react-native-material-ripple";
import { ListItem } from "react-native-elements";

import CustomSeeFlightModal from "../../components/common/CustomSeeFlightModal";
import { Context as FlightsContext } from "../../context/FlightsContext";

import colors from "../../../global/colors";
import globalStyles from "../../../global/globalStyles";

const list = [
  {
    title: "Zbor 1",
  },
  {
    title: "Zbor 2",
  },
  {
    title: "Zbor 3",
  },
];

const SavedScreen = () => {
  const {
    state: { savedFlights },
  } = useContext(FlightsContext);
  const [seeFlightModalVisible, setSeeFlightModalVisible] = useState(false);
  const [flightToShow, setFlightToShow] = useState(null);

  console.log(savedFlights);

  return (
    <View style={styles.container}>
      <CustomSeeFlightModal
        seeFlightModalVisible={seeFlightModalVisible}
        setSeeFlightModalVisible={seeFlightModalVisible}
        flightToShow={flightToShow}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.savedFlightsHeaderText}>Saved Flights</Text>
      </View>

      {savedFlights.map((item, index) => (
        <Ripple
          key={index}
          rippleColor={colors.PURPLE}
          rippleOpacity={0.8}
          onLongPress={() => {}}
          delayLongPress={150}
        >
          <ListItem>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {item.data.airline}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </Ripple>
      ))}
    </View>
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
    marginBottom: 10,
    ...globalStyles.marginHorizontal,
  },
  savedFlightsHeaderText: {
    ...globalStyles.headerBoldText,
    fontSize: 40,
  },
});

export default SavedScreen;
