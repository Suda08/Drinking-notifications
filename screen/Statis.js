
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

import Date from '../components/Date'

const Statis = () => {


    return (
        <View style={styles.container}>
            <Date />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#114165',
    },
    title: {
        padding: 16,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Statis;
