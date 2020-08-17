import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

const RADIUS = 15;

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
        <Text style={styles.textPrompt} >  {this.props.text} </Text>
      </View>
    );
  }
}

class WordBlock extends PureComponent {
  selected = false;
  render() {
    const x = this.props.position[0];
    const y = this.props.position[1];
    var wordBlockBGStyle = styles.wordBlockBG; 
    if( this.selected )
    {
      wordBlockBGStyle = styles.wordBlockSelected;
    }
    return (
      <View style={[wordBlockBGStyle, { left: x, top: y }]}>
        <Text style={styles.wordBlockText} >  {this.props.text} </Text>
      </View>
    );
  }
}

class Grid extends PureComponent {

  render() {
    const x = this.props.position[0] + 15;
    const y = this.props.position[1] + 15;
    return (
      <View style={[styles.gridPoint, { left: x, top: y }]} />
    );
  }
}

const styles = StyleSheet.create({
  gridPoint: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "black",
    position: "absolute"
  },
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
  wordBlockSelected: {
    borderColor: "#222",
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

export { Finger, TopTextPrompt, WordBlock, Grid };