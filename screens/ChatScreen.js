import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChatScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>History Screen</Text>
        <Button
            title="Go to History screen...again"
            onPress={() => navigation.push("History")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
