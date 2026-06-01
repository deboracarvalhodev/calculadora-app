import { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

import NumberInput from '../components/NumberInput';
import OperationButton from '../components/OperationButton';
import AlertPopup from '../components/AlertPopup';
import { soma } from '../utils/calculator';

export default function SomaScreen({ navigation, route }) {
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

  function handleSomar() {
    if (!a || !b) {
      setAlertVisible(true);
      return;
    }

    const resultado = soma(a, b);

    navigation.navigate('Resultado', {
      operacao: 'Soma',
      resultado,
      a,
      b,
      simbolo: '+',
      origem: 'Soma',
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
          Soma
        </Text>

        <NumberInput
          value={a}
          onChange={setA}
          placeholder="Digite o primeiro número"
        />
        <NumberInput
          value={b}
          onChange={setB}
          placeholder="Digite o segundo número"
        />

        <View style={{ marginTop: 20 }}>
          <OperationButton title="Somar" onPress={handleSomar} />
        </View>
      </View>

      <AlertPopup
        visible={alertVisible}
        message="Preencha todos os campos da Soma."
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
}
