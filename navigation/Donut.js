import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';


  const [value, setValue] = useState(0);

  const Donut = () => {
  return (
    <View style={styles.container}>
      <Text>Remember to subscribe to Code Palace!</Text>

      <CircularProgress
        radius={90}
        value={85}
        textColor='#222'
        fontSize={20}
        valueSuffix={'%'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        inActiveStrokeWidth={6}
        duration={3000}
        onAnimationComplete={() => setValue(50)}
      />

      <CircularProgress
        radius={100}
        value={value}
        textColor='#222'
        fontSize={20}
        valueSuffix={'%'}
        activeStrokeColor={'tomato'}
        inActiveStrokeOpacity={0.2}
        duration={4000}
      />

      <StatusBar style="auto" />
    </View>
  );
};
export default Donut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});