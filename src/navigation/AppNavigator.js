import {
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function AppNavigator() {
  const { theme } = useContext(ThemeContext);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors, 
      background: theme.background,
      card: theme.card,
      text: theme.text,
      border: theme.secondaryText,
      primary: theme.primary,
      notification: theme.primary, 
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}