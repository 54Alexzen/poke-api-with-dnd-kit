import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import Home from "./pages/Home";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <Home />
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
}

export default App;
