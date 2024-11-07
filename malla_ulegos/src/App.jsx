import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import MallaTable from "./components/MallaTable";
import { Box } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider>
      <Box p="lg">
        <MallaTable />
      </Box>
    </MantineProvider>
  );
}
