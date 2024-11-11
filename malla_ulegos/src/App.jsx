import "@mantine/core/styles.css";
import { MantineProvider, Box } from "@mantine/core";
import MallaTable from "./components/MallaTable";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MantineProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box p="lg" style={{ flex: 1 }}>
          <MallaTable />
        </Box>
        <Footer />
      </div>
    </MantineProvider>
  );
}
