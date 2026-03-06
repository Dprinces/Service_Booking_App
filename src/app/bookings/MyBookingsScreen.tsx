import React from "react";
import { View, FlatList, Alert, Platform } from "react-native";
import { useBookingStore } from "../../store/bookingStore";
import { BookingCard } from "../../components/BookingCard";
import { EmptyState } from "../../components/EmptyState";

export const MyBookingsScreen = () => {
  const { bookings, deleteBooking } = useBookingStore();

  const handleDelete = (id: string) => {
    if (Platform.OS === "web") {
      if (window.confirm("Are you sure you want to cancel this booking?")) {
        deleteBooking(id);
      }
    } else {
      Alert.alert(
        "Cancel Booking",
        "Are you sure you want to cancel this booking?",
        [
          { text: "No", style: "cancel" },
          {
            text: "Yes",
            style: "destructive",
            onPress: () => {
              deleteBooking(id);
            },
          },
        ]
      );
    }
  };

  return (
    <View className="flex-1 bg-gray-50 px-4 pt-4">
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookingCard booking={item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No bookings yet"
            message="Your scheduled services will appear here. Go ahead and book your first service!"
          />
        }
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};
