import {View, Text} from 'react-native';
import SwitchButton from 'switch-button-react-native';
import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      activeSwitch: 1,
    };
  }

  render() {
    return (
      <View style={{flex: 1, marginHorizontal: 30}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            margin: 30,
          }}>
          Smart Garden
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{}}>Temperature : 27 C</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{}}>Himudity : 60%</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{}}>Himudity of Soild : 54%</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              marginRight: 30,
              marginTop: 10,
            }}>
            Spary pump
          </Text>
          <SwitchButton
            onValueChange={(val) => this.setState({activeSwitch: val})} // this is necessary for this component
            text1="ON" // optional: first text in switch button --- default ON
            text2="OFF" // optional: second text in switch button --- default OFF
            switchWidth={100} // optional: switch width --- default 44
            switchHeight={44} // optional: switch height --- default 100
            switchdirection="rtl" // optional: switch button direction ( ltr and rtl ) --- default ltr
            switchBorderRadius={100} // optional: switch border radius --- default oval
            switchSpeedChange={500} // optional: button change speed --- default 100
            switchBorderColor="#d4d4d4" // optional: switch border color --- default #d4d4d4
            switchBackgroundColor="#fff" // optional: switch background color --- default #fff
            btnBorderColor="#00a4b9" // optional: button border color --- default #00a4b9
            btnBackgroundColor="#00bcd4" // optional: button background color --- default #00bcd4
            fontColor="#b1b1b1" // optional: text font color --- default #b1b1b1
            activeFontColor="#fff" // optional: active font color --- default #fff
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              marginRight: 30,
              marginTop: 10,
            }}>
            Water pump
          </Text>
          <SwitchButton
            onValueChange={(val) => this.setState({activeSwitch: val})} // this is necessary for this component
            text1="ON" // optional: first text in switch button --- default ON
            text2="OFF" // optional: second text in switch button --- default OFF
            switchWidth={100} // optional: switch width --- default 44
            switchHeight={44} // optional: switch height --- default 100
            switchdirection="rtl" // optional: switch button direction ( ltr and rtl ) --- default ltr
            switchBorderRadius={100} // optional: switch border radius --- default oval
            switchSpeedChange={500} // optional: button change speed --- default 100
            switchBorderColor="#d4d4d4" // optional: switch border color --- default #d4d4d4
            switchBackgroundColor="#fff" // optional: switch background color --- default #fff
            btnBorderColor="#00a4b9" // optional: button border color --- default #00a4b9
            btnBackgroundColor="#00bcd4" // optional: button background color --- default #00bcd4
            fontColor="#b1b1b1" // optional: text font color --- default #b1b1b1
            activeFontColor="#fff" // optional: active font color --- default #fff
          />
        </View>
        {this.state.activeSwitch === 1
          ? console.log('view1')
          : console.log('view2')}
      </View>
    );
  }
}
