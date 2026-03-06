import { View, Text, TouchableOpacity } from 'react-native';
import { ServiceProvider } from '../types';

interface Props {
  service: ServiceProvider;
  onPress: () => void;
}

export const ServiceCard = ({ service, onPress }: Props) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-gray-100 active:opacity-70"
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-1 mr-2">
          <Text className="text-lg font-bold text-gray-900" numberOfLines={1}>{service.company}</Text>
          <View className="bg-blue-50 self-start px-2 py-1 rounded-md mt-2">
            <Text className="text-blue-600 font-semibold text-xs uppercase tracking-wider">{service.category}</Text>
          </View>
        </View>
        <View className="items-end">
           <Text className="text-gray-500 text-xs font-medium bg-gray-50 px-2 py-1 rounded-full">{service.city}</Text>
        </View>
      </View>
      
      <View className="mt-4 pt-4 border-t border-gray-50 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <View className="w-6 h-6 rounded-full bg-gray-200 items-center justify-center mr-2">
             <Text className="text-xs font-bold text-gray-600">{service.name.charAt(0)}</Text>
          </View>
          <Text className="text-gray-600 text-sm">{service.name}</Text>
        </View>
        <Text className="text-blue-600 font-semibold text-sm">View Details →</Text>
      </View>
    </TouchableOpacity>
  );
};
