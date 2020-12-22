/* eslint-disable react-native/no-inline-styles */
// screens/AvailablePlayersScreen.js

import React, {Component} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Player 1',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Player 2',
    cost: 10000,
    bating_rank: 10,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Player 3',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2444',
    name: 'Player 4',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97123',
    name: 'Player 5',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29124',
    name: 'Player 6',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2125',
    name: 'Player 7',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97126',
    name: 'Player 8',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29127',
    name: 'Player 9',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2128',
    name: 'Player 10',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97129',
    name: 'Player 11',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29130',
    name: 'Player 12',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29131',
    name: 'Player 13',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2132',
    name: 'Player 14',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97133',
    name: 'Player 15',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29134',
    name: 'Player 16',
    cost: 100000,
    bating_rank: 80,
    bolling_rank: 30,
    all_round_rank: 2,
    isSelected: false,
  },
];

class AvailablePlayersScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availablePlayers: DATA,
      selectedPlayers: [],
      availableBudget: this.props.route.params.availableBudget,
    };
  }
  renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  render() {
    const renderItem = ({item}) => <this.Item item={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight style={styles.button}>
          <Button
            title="Selected Players"
            onPress={() => this.gotoSelectedList()}
          />
        </TouchableHighlight>
        <this.Separator />
        <FlatList
          data={this.state.availablePlayers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </SafeAreaView>
    );
  }

  gotoSelectedList = () => {
    const selectedList = this.state.availablePlayers.filter(
      (item) => item.isSelected === true,
    );
    this.props.navigation.navigate('SelectedPlayers', {
      selectedPlayers: selectedList,
      availableBudget: this.state.availableBudget,
    });
  };

  selectItem = (selectedItem) => {
    selectedItem.isSelected = !selectedItem.isSelected;
    const index = this.state.availablePlayers.findIndex(
      (item) => selectedItem.id === item.id,
    );
    this.state.availablePlayers[index] = selectedItem;
    this.setState({
      availablePlayers: this.state.availablePlayers,
    });
  };

  Separator = () => <View style={styles.separator} />;

  Item = ({item}) => (
    <TouchableWithoutFeedback onPress={() => this.selectItem(item)}>
      <View style={item.isSelected ? styles.selected : styles.list}>
        <View style={styles.columnSegment1}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <View style={styles.columnSegment2}>
          <Text style={styles.label}>{item.name}</Text>
          <Text style={styles.label}>{item.cost}</Text>
        </View>
        <View style={styles.columnSegment2}>
          <Text style={styles.label}>Bating </Text>
          <Text style={styles.label}>Bowling</Text>
          <Text style={styles.label}>All Round</Text>
        </View>
        <View style={styles.columnSegment2}>
          <Text style={styles.label}>{item.bating_rank}</Text>
          <Text style={styles.label}>{item.bolling_rank}</Text>
          <Text style={styles.label}>{item.all_round_rank}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    height: 40,
    width: 160,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    marginVertical: 3,
    marginHorizontal: 2,
  },
  label: {
    fontSize: 16,
    color: '#f7f7f7',
  },
  logo: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  columnSegment1: {
    flex: 1,
    marginLeft: 2,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  columnSegment2: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 10,
    alignSelf: 'center',
  },
  columnSegment3: {
    flex: 6,
    flexDirection: 'column',
    marginLeft: 10,
    alignSelf: 'center',
  },
  selected: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#FA7B5F',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
    flex: 10,
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#192338',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
    flex: 10,
  },
});

export default AvailablePlayersScreen;
