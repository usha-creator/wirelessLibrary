import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class TransactionScreen extends Component{
render(){
    return(
        <view style={{flex:1, alignItems : 'center', justifyContent : 'center'}}>
            <Text>Issue/Return</Text>
        </view>
    );
}
}