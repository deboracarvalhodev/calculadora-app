import { Modal, View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function AlertPopup({
  visible,
  message,
  onClose,
}) {
  const { theme, fontSize } = useContext(ThemeContext);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: theme.card,
            borderRadius: 20,
            padding: 25,
          }}
        >
          <Text
            style={{
              fontSize: fontSize + 2,
              fontFamily: "Montserrat_700Bold",
              color: theme.text,
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            Aviso
          </Text>

          <Text
            style={{
              fontSize: fontSize,
              color: theme.secondaryText,
              textAlign: "center",
              lineHeight: fontSize + 8,
            }}
          >
            {message}
          </Text>

          <TouchableOpacity
            onPress={onClose}
            style={{
              marginTop: 25,
              backgroundColor: theme.primary,
              paddingVertical: 12,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: "Montserrat_700Bold",
              }}
            >
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}