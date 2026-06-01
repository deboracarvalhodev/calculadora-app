import { useState, useContext } from 'react';
import { TextInput } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function NumberInput({ value, onChange, placeholder }) {
  const { theme } = useContext(ThemeContext);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      keyboardType="numeric"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={placeholder}
      placeholderTextColor={theme.text}
      style={{
        fontFamily: 'Montserrat_400Regular',
        fontSize: 16,
        backgroundColor: theme.card,
        color: theme.text,
        padding: 12,
        borderRadius: 10,
        marginVertical: 8,

        borderWidth: 2,
        borderColor: isFocused ? theme.accent : 'transparent',
      }}
    />
  );
}
