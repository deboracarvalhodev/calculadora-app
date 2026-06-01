import { ScrollView, View, Text, Image } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import SettingsBottomSheet from "../components/SettingsBottomSheet";
import OperationButton from "../components/OperationButton";

export default function HomeScreen({ navigation }) {
  const { theme, fontSize } = useContext(ThemeContext);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 30,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require("../assets/img-homescreen-calculator.png")}
        style={{
          width: 220,
          height: 220,
          alignSelf: "center",
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

      <Text
        style={{
          fontSize: fontSize + 12,
          fontFamily: "Montserrat_700Bold",
          color: theme.text,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Calculadora
      </Text>

      <Text
        style={{
          fontSize: fontSize,
          fontFamily: "Montserrat_400Regular",
          color: theme.text,
          textAlign: "center",
          lineHeight: fontSize + 8,
          paddingHorizontal: 10,
        }}
      >
        Aplicação para realizar operações matemáticas básicas com suporte a
        tema escuro e ajuste de fonte.
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <OperationButton
          title="Soma"
          onPress={() => navigation.navigate("Soma")}
        />

        <OperationButton
          title="Subtração"
          onPress={() => navigation.navigate("Subtração")}
        />

        <OperationButton
          title="Multiplicação"
          onPress={() => navigation.navigate("Multiplicação")}
        />

        <OperationButton
          title="Divisão"
          onPress={() => navigation.navigate("Divisão")}
        />
      </View>

      <SettingsBottomSheet />
    </ScrollView>
  );
}