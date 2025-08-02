import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Index />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
