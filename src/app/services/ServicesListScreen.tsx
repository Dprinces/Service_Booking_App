import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { ServiceCard } from "../../components/ServiceCard";
import { EmptyState } from "../../components/EmptyState";
import { useServices } from "../../hooks/useServices";
import { ServiceProvider } from "../../types";

export const ServicesListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { services, loading, refetch } = useServices();
  const [filteredServices, setFilteredServices] = useState<ServiceProvider[]>(
    [],
  );
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("MyBookings")}>
          <Text className="text-blue-600 font-bold">My Bookings</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (services) {
      if (search) {
        const filtered = services.filter(
          (s) =>
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.company.toLowerCase().includes(search.toLowerCase()) ||
            s.category.toLowerCase().includes(search.toLowerCase()),
        );
        setFilteredServices(filtered);
      } else {
        setFilteredServices(services);
      }
    }
  }, [search, services]);

  return (
    <View className="flex-1 bg-gray-50 px-4 pt-4">
      <View className="mb-4">
        <TextInput
          className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm text-base"
          placeholder="🔍 Search services..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {loading && !refreshing ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#2563EB" />
        </View>
      ) : (
        <FlatList
          className="flex-1"
          data={filteredServices}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ServiceCard
              service={item}
              onPress={() =>
                navigation.navigate("ServiceDetails", { service: item })
              }
            />
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListEmptyComponent={
            <EmptyState
              title="No services found"
              message="Try adjusting your search terms"
            />
          }
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
