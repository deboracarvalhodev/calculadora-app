import { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

import NumberInput from '../components/NumberInput';
import OperationButton from '../components/OperationButton';
import AlertPopup from '../components/AlertPopup';
import { subtracao } from '../utils/calculator';

export default function SubtracaoScreen({ navigation, route }) {
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

  function handleSubtrair() {
    if (!a || !b) {
      setAlertVisible(true);
      return;
    }

    const resultado = subtracao(a, b);

    navigation.navigate('Resultado', {
      operacao: 'Subtração',
      simbolo: '-',
      resultado,
      a,
      b,
      origem: 'Subtração',
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
          Subtração
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
          <OperationButton title="Subtrair" onPress={handleSubtrair} />
        </View>
      </View>

      <AlertPopup
        visible={alertVisible}
        message="Preencha todos os campos da Subtração."
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
}
