import { View, Text } from 'react-native';

interface Props {
  title: string;
  message: string;
}

export const EmptyState = ({ title, message }: Props) => {
  return (
    <View className="flex-1 justify-center items-center py-12 px-6 opacity-70">
      <Text className="text-6xl mb-6">📭</Text>
      <Text className="text-xl font-bold text-gray-900 text-center mb-2">{title}</Text>
      <Text className="text-gray-500 text-center leading-relaxed">{message}</Text>
    </View>
  );
};
