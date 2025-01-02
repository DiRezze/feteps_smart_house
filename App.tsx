import { SafeAreaProvider } from "react-native-safe-area-context";
import AppRoutes from "./src/routes/index.routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppRoutes />
    </SafeAreaProvider>
  );
}
