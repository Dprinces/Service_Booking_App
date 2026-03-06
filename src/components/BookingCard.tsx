import { View, Text, TouchableOpacity } from 'react-native';
import { Booking } from '../types';

interface Props {
  booking: Booking;
  onDelete: (id: string) => void;
}

export const BookingCard = ({ booking, onDelete }: Props) => {
  return (
    <View className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-gray-100">
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-900">{booking.serviceName}</Text>
          <Text className="text-gray-500 text-sm mt-1">{booking.providerName}</Text>
        </View>
        <TouchableOpacity 
          onPress={() => onDelete(booking.id)} 
          className="bg-red-50 px-3 py-1.5 rounded-full active:bg-red-100"
        >
          <Text className="text-red-600 text-xs font-bold">Delete</Text>
        </TouchableOpacity>
      </View>
      
      <View className="mt-4 bg-gray-50 p-3 rounded-xl">
        <View className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center">
                <Text className="text-gray-500 text-xs uppercase font-bold w-12">Date</Text>
                <Text className="text-gray-900 font-semibold">{booking.date}</Text>
            </View>
        </View>
        <View className="flex-row justify-between items-center">
             <View className="flex-row items-center">
                <Text className="text-gray-500 text-xs uppercase font-bold w-12">Time</Text>
                <Text className="text-gray-900 font-semibold">{booking.time}</Text>
            </View>
        </View>
        
        {booking.notes && (
          <View className="mt-3 pt-3 border-t border-gray-200">
             <Text className="text-gray-500 text-xs italic">"{booking.notes}"</Text>
          </View>
        )}
      </View>
    </View>
  );
};
