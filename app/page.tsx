import { Container } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "16px",
        minHeight: "100vh",
        maxWidth: "444px !important",
        width: "100%",
        borderRight: "1px solid lightgrey",
        borderLeft: "1px solid lightgrey",
      }}
    >
      <Navbar />
    </Container>
  );
}
