import { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

import NumberInput from '../components/NumberInput';
import OperationButton from '../components/OperationButton';
import AlertPopup from '../components/AlertPopup';
import { divisao } from '../utils/calculator';

export default function DivisaoScreen({ navigation, route }) {
  const { theme, fontSize } = useContext(ThemeContext);
  const [alertVisible, setAlertVisible] = useState(false);

  const [a, setA] = useState('');
  const [b, setB] = useState('');

  useEffect(() => {
    if (route?.params?.reset) {
      setA('');
      setB('');
    }
  }, [route?.params]);

  function handleDividir() {
    if (!a || !b) {
      setAlertVisible(true);
      return;
    }

    const resultado = divisao(a, b);

    navigation.navigate('Resultado', {
      operacao: 'Divisão',
      simbolo: '/',
      resultado,
      a,
      b,
      origem: 'Divisão',
    });
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize + 10,
            fontFamily: 'Montserrat_700Bold',
            color: theme.text,
            textAlign: 'center',
            marginBottom: 25,
          }}>
          Divisão
        </Text>

        <NumberInput
          value={a}
          onChange={setA}
          placeholder="Digite o dividendo"
        />
        <NumberInput value={b} onChange={setB} placeholder="Digite o divisor" />

        <View style={{ marginTop: 20 }}>
          <OperationButton title="Dividir" onPress={handleDividir} />
        </View>
      </View>

      <AlertPopup
        visible={alertVisible}
        message="Preencha todos os campos da Divisão."
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
}
