import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Booking } from "../types";

interface BookingState {
  bookings: Booking[];
  setBookings: (bookings: Booking[]) => void;
  addBooking: (booking: Booking) => void;
  deleteBooking: (id: string) => void;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      bookings: [],
      setBookings: (bookings) => set({ bookings }),
      addBooking: (booking) =>
        set((state) => ({
          bookings: [...state.bookings, booking],
        })),
      deleteBooking: (id) =>
        set((state) => ({
          bookings: state.bookings.filter((booking) => booking.id !== id),
        })),
    }),
    {
      name: "booking-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
