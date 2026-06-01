import { useState, useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

import NumberInput from '../components/NumberInput';
import OperationButton from '../components/OperationButton';
import AlertPopup from '../components/AlertPopup';
import { multiplicacao } from '../utils/calculator';

export default function MultiplicacaoScreen({ navigation, route }) {
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

  function handleMultiplicar() {
    if (!a || !b) {
      setAlertVisible(true);
      return;
    }

    const resultado = multiplicacao(a, b);

    navigation.navigate('Resultado', {
      operacao: 'Multiplicação',
      simbolo: '*',
      resultado,
      a,
      b,
      origem: 'Multiplicação',
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
          Multiplicação
        </Text>

        <NumberInput
          value={a}
          onChange={setA}
          placeholder="Digite o multiplicando"
        />
        <NumberInput
          value={b}
          onChange={setB}
          placeholder="Digite o multiplicador"
        />

        <View style={{ marginTop: 20 }}>
          <OperationButton title="Multiplicar" onPress={handleMultiplicar} />
        </View>
      </View>

      <AlertPopup
        visible={alertVisible}
        message="Preencha todos os campos da Multiplicação."
        onClose={() => setAlertVisible(false)}
      />
    </View>
  );
}
