import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger, TopTextPrompt, WordBlock, Grid } from "./renderers";
import { MoveWordBlocks } from "./systems"

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveWordBlocks]}
        entities={{
          1: { position: [0, 150] , renderer: <Finger />},
          2: { text: "Je", position: [0, 250] , renderer: <WordBlock />},
          3: { text: "suis", position: [0, 350] , renderer: <WordBlock />},
          4: { text: "faim", position: [100, 350] , renderer: <WordBlock />},
          5: { text: "2.0. J'ai aller parce que quoi?", position: [0, 0], renderer: <TopTextPrompt />}
        }}>

        <StatusBar hidden={true} />

      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);