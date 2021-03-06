import React, { useEffect, useState } from 'react';
import { Keyboard, TextInput, View, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const onSubmit = async (seconds) => {
    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    await Notifications.scheduleNotificationAsync({
        identifier: 'night-notification',
        content: {
            title: `Good Night :)`,
            subtitle: 'Have a great sleep :D',
            body: `Have a great sleep :D`,
            sound: true,
            data: {
                to: 'new-log'
            },
            color: "#000000"
        },
        trigger: {
            seconds: seconds,
        }
    });
};
const handleNotification = () => {
    console.warn('ok! got your notif');
};

const askNotification = async () => {
    // We need to ask for Notification permissions for ios devices
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (Constants.isDevice && status === 'granted')
        console.log('Notification permissions granted.');
};

const TimerNotification = () => {
    const [text, onChangeText] = useState(3600);

    useEffect(() => {
        askNotification();
        // If we want to do something with the notification when the app
        // is active, we need to listen to notification events and
        // handle them in a callback
        const listener = Notifications.addNotificationReceivedListener(handleNotification);
        return () => listener.remove();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder="Seconds"
                style={{ fontSize: 30, borderWidth: 1, width: 300 }}
                keyboardType="numeric"
            />
            <Button onPress={() => onSubmit(Number(text))} title="Schedule" />
        </View>
    )
};

export default TimerNotification