import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

const ListItem = props => (
  <TouchableHighlight onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="contain" source={props.placeImage} style={styles.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
      marginRight:8,
      height:30, 
      width:30
  }
});
export default ListItem;
