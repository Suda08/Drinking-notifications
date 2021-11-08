import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-elements'

class ButtonExert extends Component {
    render() {
        return (
            <View>
                <View  style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                marginTop: -70,
                paddingHorizontal: 370,}}>
                    <Button
                        icon={{
                            name: 'plus',
                            type: 'feather',
                            color: '#000',
                            size: 20,
                            style: { marginRight: 0 }
                        }}
                        onPress={() => this.doSomething()}
                        buttonStyle={{ backgroundColor: '#fff', width:50, height: 50, borderRadius: 40 }}
                        containerViewStyle={{ alignSelf: 'center' }}
                    />
                </View>
            </View>
        );
    }
}


export default ButtonExert;