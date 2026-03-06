import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button = ({ onPress, title, variant = 'primary', loading, disabled, className }: ButtonProps) => {
  const baseStyle = "py-4 px-6 rounded-xl items-center justify-center shadow-sm";
  const variants = {
    primary: "bg-blue-600",
    secondary: "bg-gray-100",
    danger: "bg-red-500",
    outline: "bg-transparent border border-blue-600"
  };
  const textVariants = {
    primary: "text-white font-bold text-base",
    secondary: "text-gray-900 font-bold text-base",
    danger: "text-white font-bold text-base",
    outline: "text-blue-600 font-bold text-base"
  };

  return (
    <TouchableOpacity 
      onPress={onPress} 
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50' : ''} ${className}`}
      disabled={disabled || loading}
    >
      {loading ? <ActivityIndicator color={variant === 'outline' ? '#2563EB' : 'white'} /> : <Text className={textVariants[variant]}>{title}</Text>}
    </TouchableOpacity>
  );
};
