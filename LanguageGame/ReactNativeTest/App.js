import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger, TopTextPrompt, WordBlock } from "./renderers";
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
          2: { text: "Je", position: [100, 300] , renderer: <WordBlock />},
          3: { text: "suis", position: [100, 400] , renderer: <WordBlock />},
          4: { text: "faim", position: [200, 400] , renderer: <WordBlock />},
          5: { position: [0, 0], renderer: <TopTextPrompt />}
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