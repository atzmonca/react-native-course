import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";
const placeDetail = props => {
    alert(props.selectedPlace !== null);
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text> {props.selectedPlace.name} </Text>
      </View>
    );
  }

  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <Button title="Delte" color="red" />
        <Button title="Close" />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
      width:"100%",
      height:200
  }
});

export default placeDetail;
