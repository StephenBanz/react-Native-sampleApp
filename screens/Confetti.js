import React, { useState, useEffect, Component} from "react";
import { SafeAreaView, TextInput, StyleSheet, View} from "react-native";
import PassMeter from "react-native-passmeter";
import { TextField } from 'react-native-material-textfield';
import ConfettiCannon from 'react-native-confetti-cannon';


  class ConfettiView extends Component {
    constructor(props) {
        super(props);
        this.state = {confettis: []};
        this.confettiIndex = 0;
        this.shouldStop = false;
    }
  
    componentDidMount() {
      return (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      );
    }
  
    componentDidUpdate() {
      return (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      );
    }

    componentWillUpdate() {
      return (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      );
    }
  
    render() {
      return (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      );
    }
  }
  
  ConfettiView.defaultProps = {
     confettiCount: 100,
     timeout: 30,
     untilStopped: false
  }
  
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0
    }
  });
  
  export default ConfettiView;