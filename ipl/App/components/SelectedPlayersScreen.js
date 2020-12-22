/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';

class SelectedPlayersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayers: this.props.route.params.selectedPlayers,
    };
  }
  renderSeparator = () => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  render() {
    const renderItem = ({item}) => <this.Item item={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', justifycontent: 'center'}}>
          <TouchableHighlight style={styles.button}>
            <Button
              title="Available Players"
              onPress={() => this.props.navigation.goBack(null)}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Button
              title="Report"
              onPress={() =>
                this.props.navigation.navigate('SelectionReport', {
                  selectedPlayers: this.state.selectedPlayers,
                  availableBudget: this.props.route.params.availableBudget,
                })
              }
            />
          </TouchableHighlight>
        </View>
        <this.Separator />
        {this.state.selectedPlayers &&
          this.state.selectedPlayers.length > 0 && (
            <FlatList
              data={this.state.selectedPlayers}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={this.renderSeparator}
            />
          )}
        {!this.state.selectedPlayers ||
          (this.state.selectedPlayers.length === 0 && (
            <Text style={styles.label}>Zero Player Selected </Text>
          ))}
      </SafeAreaView>
    );
  }

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

export default SelectedPlayersScreen;
