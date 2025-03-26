'use client'
import { Box, Typography } from "@mui/material";
import { CharacterProvider } from "./contexts/CharacterContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { lazy, Suspense } from "react";


const CharacterCards = lazy(() => import('./components/CharacterCards'));
const ModalPanel = lazy(() => import('./components/ModalPanel'));
const Loading = lazy(() => import('./components/Loading'));

export default function Home() {
  return (
    <Box p={4} textAlign={"center"}>
      <Typography variant="h3" fontFamily={"Star Jedi"} >Star Wars Karakterek</Typography>
      <ErrorBoundary>
      <CharacterProvider>
        <CharacterCards />
        <Suspense fallback={<Loading/>}>
          <ModalPanel />
        </Suspense>
      </CharacterProvider>
      </ErrorBoundary>
    </Box>
  );
}
