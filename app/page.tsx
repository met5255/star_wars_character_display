'use client'
import { Box, Typography } from "@mui/material";
import CharacterCards from "./components/CharacterCards";
import ModalPanel from "./components/ModalPanel";
import { CharacterProvider } from "./contexts/CharacterContext";

export default function Home() {
  return (
    <Box p={4} textAlign={"center"}>
      <Typography variant="h3" fontFamily={"Star Wars, sans-serif"} >Star Wars Karakterek</Typography>
      <CharacterProvider>
        <CharacterCards />
        <ModalPanel />
      </CharacterProvider>
    </Box>
  );
}
