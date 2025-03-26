'use client'
import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { CharacterProvider } from "./contexts/CharacterContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { lazy, Suspense } from "react";
import { yellow } from "@mui/material/colors";
import darkTheme from "./utils/theme";


const CharacterCards = lazy(() => import('./components/CharacterCards'));
const ModalPanel = lazy(() => import('./components/ModalPanel'));
const Loading = lazy(() => import('./components/Loading'));

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box p={4} textAlign={"center"}>
        <Typography variant="h3" fontFamily={"Star Jedi"} color="white"><span style={{ color: '#FFE81F' }}>Star Wars</span><br />Karakterek</Typography>
        <ErrorBoundary>
          <CharacterProvider>
            <CharacterCards />
            <Suspense fallback={<Loading />}>
              <ModalPanel />
            </Suspense>
          </CharacterProvider>
        </ErrorBoundary>
      </Box>
    </ThemeProvider>
  );
}
