
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import { Header } from 'react-native-elements';

import Date from '../components/Date'

const MyBezierLineChart = () => {
    return (
        <>
            <LineChart
                data={{
                    labels: ['January', 'February', 'March', 'April'],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                            ],
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16} // from react-native
                height={220}
                yAxisLabel={'Rs'}
                chartConfig={{
                    backgroundColor: '#1cc910',
                    backgroundGradientFrom: '#eff3ff',
                    backgroundGradientTo: '#efefef',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
};

const Statis = () => {

    const [active, setActive] = useState();
    const [showmonth, setShowmonth] = useState();
    const [showyear, setShowyear] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    const button = [
        {
            id: 1,
            name: 'สัปดาห์'
        },
        {
            id: 2,
            name: 'เดือน'
        },
        {
            id: 3,
            name: 'ปี',
        }
    ]

    const year = [
        {
            year: '2017',
        },
        {
            year: '2018',
        },
        {
            year: '2019',
        },
        {
            year: '2020',
        },
        {
            year: '2021',
        },
    ]

    const month = [
        {
            id: 1,
            name: 'ม.ค.'
        },
        {
            id: 2,
            name: 'ก.พ.'
        },
        {
            id: 3,
            name: 'มี.ค.'
        },
        {
            id: 4,
            name: 'เม.ย.'
        },
        {
            id: 5,
            name: 'พ.ค.'
        },
        {
            id: 6,
            name: 'มิ.ย.'
        },
        {
            id: 7,
            name: 'ก.ค.'
        },
        {
            id: 8,
            name: 'ส.ค.'
        },
        {
            id: 9,
            name: 'ก.ย.'
        },
        {
            id: 10,
            name: 'ต.ค.'
        },
        {
            id: 11,
            name: 'พ.ย.'
        },
        {
            id: 12,
            name: 'ธ.ค.'
        },
    ]

    const week = [
        {
            id: 1,
            name: '2 สัปดาห์',
            start: 0,
            end: 1
        },
        {
            id: 2,
            name: '1 สัปดาห์',
            start: 0,
            end: 1
        },
        {
            id: 3,
            name: 'สัปดาห์นี้',
            start: 0,
            end: 1
        }
    ]




    return (
        <>
            <Header
                containerStyle={{
                    backgroundColor: '#003357',
                    borderBottomColor: '#003357',
                    height: 110
                }}
                centerComponent={
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>สถิติ</Text>
                }

            />
            <View style={styles.container}>
                <View style={{ width: '100%', height: 50, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>สถิติโดยรวม</Text>
                </View>
                <View style={{ width: '100%', height: 50, justifyContent: 'center', flexDirection: 'row' }}>
                    {button.map((item) => (
                        <>
                            <TouchableOpacity
                                onPress={() => setActive(item.id)}
                                style={{
                                    width: 100,
                                    height: 40,
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: 15
                                }}>
                                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                            </TouchableOpacity>
                        </>
                    ))}
                </View>

                {(() => {
                    if (active == 1) {
                        return (
                            <>
                                <View style={{ height: 40 }}>
                                    <ScrollView
                                        style={{ width: '100%', height: 10 }}
                                        horizontal
                                    >
                                        <View style={{ width: '100%', height: 50, justifyContent: 'center', flexDirection: 'row' }}>
                                            {week.map((item) => (
                                                <>
                                                    <TouchableOpacity
                                                        onPress={() => { setStart(item.start); setEnd(item.end) }}
                                                        style={{
                                                            width: 80,
                                                            height: 30,
                                                            backgroundColor: 'white',
                                                            borderRadius: 20,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginRight: 15
                                                        }}>
                                                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                </>
                                            ))}
                                        </View>
                                    </ScrollView>
                                </View>
                            </>
                        )
                    } else if (active == 2) {
                        return (
                            <>
                                <View style={{ height: 40 }}>
                                    <ScrollView
                                        style={{ width: '100%', height: 10 }}
                                        horizontal
                                    >
                                        <View style={{ height: 40 }}>
                                            <View style={{ width: '100%', height: 50, justifyContent: 'center', flexDirection: 'row' }}>
                                                {year.map((item) => (
                                                    <>
                                                        <TouchableOpacity
                                                            onPress={() => setShowyear(item.year)}
                                                            style={{
                                                                width: 80,
                                                                height: 30,
                                                                backgroundColor: 'white',
                                                                borderRadius: 20,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                marginRight: 15
                                                            }}>
                                                            <Text style={{ fontSize: 18 }}>{item.year}</Text>
                                                        </TouchableOpacity>
                                                    </>
                                                ))}
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                                <View style={{ height: 40 }}>
                                    <ScrollView
                                        style={{ width: '100%', height: 10 }}
                                        horizontal
                                    >
                                        <View style={{ width: '100%', height: 50, justifyContent: 'center', flexDirection: 'row' }}>
                                            {month.map((item) => (
                                                <>
                                                    <TouchableOpacity
                                                        onPress={() => setShowmonth(item.id)}
                                                        style={{
                                                            width: 80,
                                                            height: 30,
                                                            backgroundColor: 'white',
                                                            borderRadius: 20,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginRight: 15
                                                        }}>
                                                        <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                </>
                                            ))}
                                        </View>
                                    </ScrollView>
                                </View>

                            </>
                        )
                    } else {
                        return (
                            <>
                                <View style={{ height: 40 }}>
                                    <ScrollView
                                        style={{ width: '100%', height: 10 }}
                                        horizontal
                                    >
                                        <View style={{ height: 40 }}>
                                            <View style={{ width: '100%', height: 50, justifyContent: 'center', flexDirection: 'row' }}>
                                                {year.map((item) => (
                                                    <>
                                                        <TouchableOpacity
                                                            onPress={() => setShowyear(item.year)}
                                                            style={{
                                                                width: 80,
                                                                height: 30,
                                                                backgroundColor: 'white',
                                                                borderRadius: 20,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                marginRight: 15
                                                            }}>
                                                            <Text style={{ fontSize: 18 }}>{item.year}</Text>
                                                        </TouchableOpacity>
                                                    </>
                                                ))}
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            </>
                        )
                    }
                })()}



                <View style={{ width: '100%', height: 250, justifyContent: 'center', alignItems: 'center' }}>
                    <MyBezierLineChart />
                </View>
                <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '95%', height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 100 }}>สถิติรวม</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}>657,950</Text><Text style={{ fontSize: 16, fontWeight: 'bold' }}>/ 730,000 มล.</Text>
                    </View>
                </View>
                <View style={{ width: '90%', height: 50, justifyContent: 'flex-end', marginLeft: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>เครื่องดื่ม </Text>
                </View>
                <View style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '95%', height: 50, backgroundColor: '#10486E', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 160, color: 'white' }}>น้ำ</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>156,060 มล.</Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '95%', height: 50, backgroundColor: '#10486E', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 160, color: 'white' }}>น้ำ</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>156,060 มล.</Text>
                    </View>
                </View>
            </View>
        </>
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
