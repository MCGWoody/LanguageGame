import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

const RADIUS = 20;

class Finger extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <View style={[styles.finger, { left: x, top: y }]} />
    );
  }
}

class TopTextPrompt extends PureComponent {
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];
    return (
      <View style={[styles.viewBG, { left: x, top: y }]}>
        <Text style={styles.textPrompt} >  J'ai aller parce que quoi? </Text>
      </View>
    );
  }
}

class WordBlock extends PureComponent {

  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];
    return (
      <View style={[styles.wordBlockBG, { left: x, top: y }]}>
        <Text style={styles.wordBlockText} >  {this.props.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finger: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "black",
    position: "absolute"
  },
  viewBG: {
    borderColor: "#CCC",
    borderWidth: 4,
    width: 410,
    height: 100,
    backgroundColor: "black",
    position: "absolute"
  },
  textPrompt: {
    color: "green",
    fontSize: 26
  },
  wordBlockBG: {
    borderColor: "#CCC",
    borderWidth: 4,
    width: 100,
    height: 100,
    backgroundColor: "#DDD",
    position: "absolute"
  },
  wordBlockText: {
    color: "black",
    fontSize: 20
  }
});

export { Finger, TopTextPrompt, WordBlock };