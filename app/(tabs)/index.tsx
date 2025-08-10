import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';

const HomeScreen = () => {
    return <Redirect href={"/(auth)/sing-in"} />;
}

export default HomeScreen