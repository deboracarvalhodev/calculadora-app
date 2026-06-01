import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../styles/themes";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [fontSize, setFontSize] = useState(18);

  const [settingsOpen, setSettingsOpen] = useState(false);

  function openSettings() {
    setSettingsOpen(true);
  }

  function closeSettings() {
    setSettingsOpen(false);
  }

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        setIsDark,
        fontSize,
        setFontSize,
        settingsOpen,
        openSettings,
        closeSettings,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}