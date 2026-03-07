import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Button } from "../../components/Button";
import { Phone, Mail, Globe, MapPin, User, Info } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ServiceDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ServiceDetails">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { service } = route.params;
  const insets = useSafeAreaInsets();

  const handleCall = () => {
    Linking.openURL(`tel:${service.phone}`);
  };

  const handleEmail = () => {
    if (service.email) Linking.openURL(`mailto:${service.email}`);
  };

  const handleWebsite = () => {
    if (service.website) Linking.openURL(`https://${service.website}`);
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Header Background */}
        <View
          className="bg-blue-600 pb-24 px-6 relative"
          style={{ paddingTop: insets.top + 20 }}
        >
          <View className="items-center justify-center mb-4 mt-8">
            <View className="w-20 h-20 bg-white/20 rounded-full items-center justify-center mb-4 border-2 border-white/30">
              <Text className="text-4xl font-bold text-white">
                {service.company.charAt(0)}
              </Text>
            </View>
            <Text className="text-white font-bold text-2xl text-center">
              {service.company}
            </Text>
            <View className="bg-blue-500 px-3 py-1 rounded-full mt-2">
              <Text className="text-white text-xs font-bold uppercase tracking-wider">
                {service.category}
              </Text>
            </View>
          </View>
        </View>

        {/* Content Container */}
        <View className="-mt-12 px-4 pb-8">
          {/* Main Info Card */}
          <View className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <View className="flex-row items-center mb-4">
              <View className="bg-gray-100 p-2 rounded-full mr-3">
                <User size={20} color="#4B5563" />
              </View>
              <View className="flex-1">
                <Text className="text-xs text-gray-500 uppercase font-bold">
                  Provider
                </Text>
                <Text className="text-gray-900 font-medium text-base">
                  {service.name}
                </Text>
              </View>
            </View>

            <View className="h-[1px] bg-gray-100 mb-4" />

            <View className="flex-row items-center">
              <View className="bg-gray-100 p-2 rounded-full mr-3">
                <MapPin size={20} color="#4B5563" />
              </View>
              <View className="flex-1">
                <Text className="text-xs text-gray-500 uppercase font-bold">
                  Location
                </Text>
                <Text className="text-gray-900 font-medium text-base">
                  {service.city}
                </Text>
              </View>
            </View>
          </View>

          {/* About Section */}
          <View className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <View className="flex-row items-center mb-4">
              <View className="mr-2">
                <Info size={20} color="#2563EB" />
              </View>
              <Text className="text-lg font-bold text-gray-900">
                About Service
              </Text>
            </View>
            <Text className="text-gray-600 leading-6 text-base">
              {service.description || "No description available."}
            </Text>
          </View>

          {/* Contact Section */}
          <View className="bg-white rounded-2xl p-6 shadow-sm">
            <Text className="text-lg font-bold text-gray-900 mb-4">
              Contact Information
            </Text>

            <TouchableOpacity
              onPress={handleCall}
              className="flex-row items-center py-3 border-b border-gray-50 active:bg-gray-50 -mx-2 px-2 rounded-lg"
            >
              <View className="bg-green-50 p-2 rounded-full mr-3">
                <Phone size={20} color="#16A34A" />
              </View>
              <View className="flex-1">
                <Text className="text-xs text-gray-500 uppercase">Phone</Text>
                <Text className="text-gray-900 font-medium text-base">
                  {service.phone}
                </Text>
              </View>
              <Text className="text-blue-600 text-xs font-bold">CALL</Text>
            </TouchableOpacity>

            {service.email && (
              <TouchableOpacity
                onPress={handleEmail}
                className="flex-row items-center py-3 border-b border-gray-50 active:bg-gray-50 -mx-2 px-2 rounded-lg"
              >
                <View className="bg-blue-50 p-2 rounded-full mr-3">
                  <Mail size={20} color="#2563EB" />
                </View>
                <View className="flex-1">
                  <Text className="text-xs text-gray-500 uppercase">Email</Text>
                  <Text className="text-gray-900 font-medium text-base">
                    {service.email}
                  </Text>
                </View>
                <Text className="text-blue-600 text-xs font-bold">EMAIL</Text>
              </TouchableOpacity>
            )}

            {service.website && (
              <TouchableOpacity
                onPress={handleWebsite}
                className="flex-row items-center py-3 active:bg-gray-50 -mx-2 px-2 rounded-lg"
              >
                <View className="bg-purple-50 p-2 rounded-full mr-3">
                  <Globe size={20} color="#9333EA" />
                </View>
                <View className="flex-1">
                  <Text className="text-xs text-gray-500 uppercase">
                    Website
                  </Text>
                  <Text className="text-gray-900 font-medium text-base">
                    {service.website}
                  </Text>
                </View>
                <Text className="text-blue-600 text-xs font-bold">VISIT</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 pb-8 shadow-lg">
        <Button
          title="Book This Service"
          onPress={() => navigation.navigate("Booking", { service })}
        />
      </View>
    </View>
  );
};
