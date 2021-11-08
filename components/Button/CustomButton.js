import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-elements'

class CustomButton extends Component {
    render() {
        return (
            <View >
                <View  style={{
                alignItems: 'center', 
                justifyContent: 'center',
                top: -10}}>
                    <Button
                        icon={{
                            name: 'plus',
                            type: 'feather',
                            color: '#fff',
                            size: 40,
                            style: { marginRight: 0 }
                        }}
                        onPress={() => this.doSomething()}
                        buttonStyle={{ backgroundColor: '#FE685E', width: 70, height: 70, borderRadius: 40 }}
                        containerViewStyle={{ alignSelf: 'center' }}
                    />
                </View>
            </View>
        );
    }
}


export default CustomButton;