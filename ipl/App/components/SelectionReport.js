/* eslint-disable react-native/no-inline-styles */
// screens/SelectionReport.js

import React, {Component} from 'react';
import {View, Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';

class SelectionReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayers: this.props.route.params.selectedPlayers,
      availableBudget: this.props.route.params.availableBudget,
    };
  }
  render() {
    const usedBudget = this.getUsedBudget();
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'column',
            justifycontent: 'center',
            margin: 10,
          }}>
          <Text style={styles.label}>
            Total Budget: {this.state.availableBudget}
          </Text>
          <Text style={styles.label}>Used: {usedBudget}</Text>
          <Text style={styles.label}>
            Available: {this.state.availableBudget - usedBudget}
          </Text>
          <Text style={styles.label}>
            Team Strength: {this.calculateTeamStrength()}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  getUsedBudget() {
    var totalCost = 0;
    if (this.state.selectedPlayers) {
      const length = this.state.selectedPlayers.length;
      for (var i = 0; i < length; i++) {
        totalCost = totalCost + this.state.selectedPlayers[i].cost;
      }
    }
    return totalCost;
  }
  calculateTeamStrength() {
    var totalStrength = 0;
    if (this.state.selectedPlayers) {
      const length = this.state.selectedPlayers.length;
      var sumOfStrengths = 0;
      for (var i = 0; i < length; i++) {
        var player = this.state.selectedPlayers[i];
        var strengths =
          100 -
          player.bating_rank +
          100 -
          player.bolling_rank +
          100 -
          player.all_round_rank;
        sumOfStrengths = sumOfStrengths + strengths;
      }
      totalStrength = sumOfStrengths / (length * 3);
    }
    return totalStrength;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
  },
});

export default SelectionReport;
