import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Button } from "../../components/Button";
import { useBookingStore } from "../../store/bookingStore";
import { Booking } from "../../types";

export const BookingScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Booking">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { service } = route.params;
  const { addBooking, bookings } = useBookingStore();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleBooking = async () => {
    if (!date || !time) {
      if (Platform.OS === "web") {
        window.alert("Please select date and time");
      } else {
        Alert.alert("Error", "Please select date and time");
      }
      return;
    }

    const isDuplicate = bookings.some(
      (b) => b.serviceId === service.id && b.date === date && b.time === time,
    );

    if (isDuplicate) {
      if (Platform.OS === "web") {
        window.alert("A booking with these details already exists.");
      } else {
        Alert.alert(
          "Duplicate Booking",
          "You already have a booking for this service at this date and time.",
        );
      }
      return;
    }

    const newBooking: Booking = {
      id: Date.now().toString(),
      serviceId: service.id,
      serviceName: service.category,
      providerName: service.company,
      date,
      time,
      notes,
    };

    addBooking(newBooking);

    if (Platform.OS === "web") {
      window.alert("Booking confirmed!");
      navigation.navigate("MyBookings");
    } else {
      Alert.alert("Success", "Booking confirmed!", [
        { text: "OK", onPress: () => navigation.navigate("MyBookings") },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView className="flex-1 px-6 pt-6">
        <Text className="text-2xl font-bold text-gray-900 mb-6">
          Book {service.category}
        </Text>
        <Text className="text-gray-600 mb-8">with {service.company}</Text>

        <View className="mb-6">
          <Text className="mb-2 font-bold text-gray-700">
            Date (YYYY-MM-DD)
          </Text>
          <TextInput
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-base"
            placeholder="2024-07-20"
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View className="mb-6">
          <Text className="mb-2 font-bold text-gray-700">Time (HH:MM)</Text>
          <TextInput
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-base"
            placeholder="10:00 AM"
            value={time}
            onChangeText={setTime}
          />
        </View>

        <View className="mb-8">
          <Text className="mb-2 font-bold text-gray-700">Notes</Text>
          <TextInput
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-base h-32"
            placeholder="Any special instructions..."
            value={notes}
            onChangeText={setNotes}
            multiline
            textAlignVertical="top"
          />
        </View>
      </ScrollView>

      <View className="p-6 border-t border-gray-100">
        <Button title="Confirm Booking" onPress={handleBooking} />
      </View>
    </KeyboardAvoidingView>
  );
};
