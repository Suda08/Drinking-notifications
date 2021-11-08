import React, { Component } from 'react';
import { View } from 'react-native';
import {  Button } from 'react-native-elements'

class ButtonInfo extends Component {
    render() {
        return (
            <View>
                <View  style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: -70,
                paddingHorizontal: 40,}}>
                    <Button
                        icon={{
                            name: 'plus',
                            type: 'feather',
                            color: '#000',
                            size: 20,
                            style: { marginRight: 0 }
                        }}
                        onPress={() => this.doSomething('PostScreen')}
                        buttonStyle={{ backgroundColor: '#fff', width:50, height: 50, borderRadius: 40 }}
                        containerViewStyle={{ alignSelf: 'center' }}
                    />
                </View>
            </View>
        );
    }
}


export default ButtonInfo;