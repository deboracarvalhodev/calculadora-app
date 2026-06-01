import { View, Text, Modal, Switch } from 'react-native';
import { Slider } from "react-native-elements";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import OperationButton from './OperationButton';

export default function SettingsBottomSheet() {
  const {
    theme,
    isDark,
    setIsDark,
    fontSize,
    setFontSize,
    settingsOpen,
    closeSettings,
  } = useContext(ThemeContext);

  return (
    <Modal visible={settingsOpen} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: theme.card,
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Montserrat_700Bold',
              color: theme.text,
              marginBottom: 15,
            }}>
            Configurações
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={{ color: theme.text }}>Tema escuro</Text>

            <Switch
              value={isDark}
              onValueChange={() => setIsDark(!isDark)}
              trackColor={{
                false: theme.secondaryText,
                true: theme.primary,
              }}
              thumbColor="#BA68C8"
              ios_backgroundColor="#3e3e3e"
            />
          </View>

          <Text style={{ color: theme.text }}>Tamanho da fonte</Text>

          <Slider
            value={fontSize}
            onValueChange={setFontSize}
            minimumValue={14}
            maximumValue={30}
            step={1}
            minimumTrackTintColor="#82498C"
            maximumTrackTintColor="#ccc"
            thumbStyle={{
              backgroundColor: "#BA68C8",
              width: 20,
              height: 20,
            }}
          />

          <View
            style={{
              padding: 20,
            }}
          />

          <OperationButton title="Fechar" onPress={closeSettings} />
        </View>
      </View>
    </Modal>
  );
}
