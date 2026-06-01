import { TouchableOpacity, Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function OperationButton({ title, onPress }) {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        backgroundColor: theme.primary,
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: "Montserrat_700Bold",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}