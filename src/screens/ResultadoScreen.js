import { View, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../context/ThemeContext';

export default function ResultadoScreen({ navigation, route }) {
  const { theme, fontSize } = useContext(ThemeContext);

  const params = route?.params;

  if (!params) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.background,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 30,
        }}>
        <Ionicons name="calculator-outline" size={90} color={theme.primary} />

        <Text
          style={{
            marginTop: 20,
            fontSize: fontSize + 4,
            fontFamily: 'Montserrat_700Bold',
            color: theme.text,
            textAlign: 'center',
          }}>
          Nenhum cálculo realizado
        </Text>

        <Text
          style={{
            marginTop: 12,
            fontSize: fontSize,
            color: theme.text,
            textAlign: 'center',
            lineHeight: 24,
          }}>
          Faça uma operação matemática para visualizar o resultado aqui.
        </Text>
      </View>
    );
  }

  const { operacao, resultado, a, b, simbolo, origem } = params;

  function handleNovoCalculo() {
    navigation.navigate(origem, {
      reset: true,
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: fontSize + 6,
          fontFamily: 'Montserrat_700Bold',
          color: theme.text,
        }}>
        {operacao}
      </Text>

      <Text
        style={{
          fontSize: fontSize,
          color: theme.secondaryText,
          marginTop: 10,
        }}>
        {a} {simbolo} {b} =
      </Text>

      <Text
        style={{
          fontSize: fontSize + 24,
          fontFamily: 'Montserrat_700Bold',
          color: theme.primary,
          marginTop: 10,
        }}>
        {resultado}
      </Text>

      <TouchableOpacity
        onPress={handleNovoCalculo}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 40,
          backgroundColor: theme.primary,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 12,
        }}>
        <Ionicons
          name="refresh"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />

        <Text
          style={{
            color: '#fff',
            fontFamily: 'Montserrat_700Bold',
          }}>
          Novo cálculo
        </Text>
      </TouchableOpacity>
    </View>
  );
}
