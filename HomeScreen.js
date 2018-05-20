import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
    <View  style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
        {`num1`}
        </Text>

        <TextInput keyboardType='numeric' style={{height: 40,  textAlign: 'center'}}
          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />

        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
        {`num2`}
        </Text>

        <TextInput keyboardType='numeric' style={{height: 40,  textAlign: 'center'}}
          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />

        <Button onPress={this.calculateSum}
        title="Calculate"
        />

        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center'}}>
        {`Sum = ${this.state.sum}`}
        </Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      firstValue: '',
      secondValue: '',
      sum: 0
    };
  }

  calculateSum = () => {
    const { firstValue, secondValue } = this.state;
    this.setState({
      sum: Number(firstValue) + Number(secondValue)
    });
  }
}
