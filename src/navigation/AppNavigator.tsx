import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../app/auth/LoginScreen';
import { ServicesListScreen } from '../app/services/ServicesListScreen';
import { ServiceDetailsScreen } from '../app/services/ServiceDetailsScreen';
import { BookingScreen } from '../app/bookings/BookingScreen';
import { MyBookingsScreen } from '../app/bookings/MyBookingsScreen';
import { ServiceProvider } from '../types';

export type RootStackParamList = {
  Login: undefined;
  ServicesList: undefined;
  ServiceDetails: { service: ServiceProvider };
  Booking: { service: ServiceProvider };
  MyBookings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ServicesList" component={ServicesListScreen} options={{ title: 'Services' }} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} options={{ title: 'Details' }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book Service' }} />
        <Stack.Screen name="MyBookings" component={MyBookingsScreen} options={{ title: 'My Bookings' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
