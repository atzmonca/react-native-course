import React,{Component} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          placeholder="try place holder"
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          title="Add"
          onPress={this.placeSubmitHandler}
          style={styles.placeButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeInput: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5
  },
  placeInput: {
    width: "70%"
  },
  inputContainer: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },

  placeButton: {}
});
export default PlaceInput;
