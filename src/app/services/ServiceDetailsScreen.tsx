import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { Button } from '../../components/Button';

export const ServiceDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ServiceDetails'>>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { service } = route.params;

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-6">
        <View className="bg-blue-50 p-4 rounded-xl mb-6 items-start">
           <Text className="text-blue-600 font-bold uppercase tracking-wider mb-1">{service.category}</Text>
           <Text className="text-3xl font-bold text-gray-900 mb-2">{service.company}</Text>
           <Text className="text-gray-600 text-lg">by {service.name}</Text>
        </View>

        <View className="space-y-4 mb-8">
           <View className="mb-4">
              <Text className="text-gray-500 font-bold uppercase text-xs mb-1">Location</Text>
              <Text className="text-gray-900 text-base">{service.city}</Text>
           </View>
           <View className="mb-4">
              <Text className="text-gray-500 font-bold uppercase text-xs mb-1">Contact</Text>
              <Text className="text-gray-900 text-base">{service.phone}</Text>
              {service.email && <Text className="text-gray-900 text-base">{service.email}</Text>}
              {service.website && <Text className="text-gray-900 text-base">{service.website}</Text>}
           </View>
           <View className="mb-4">
              <Text className="text-gray-500 font-bold uppercase text-xs mb-1">About</Text>
              <Text className="text-gray-800 text-base leading-6">{service.description}</Text>
           </View>
        </View>
      </ScrollView>

      <View className="p-6 border-t border-gray-100 safe-bottom">
        <Button 
          title="Book Service" 
          onPress={() => navigation.navigate('Booking', { service })} 
        />
      </View>
    </View>
  );
};
