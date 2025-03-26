
import Character from "@/app/interfaces/Character";
import { Box, Card, CardActionArea, CardContent, Grid2 as Grid, Pagination, Skeleton, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import Loading from "../Loading";
import { useCharacterContext } from '../../contexts/CharacterContext';
import useTypingDelay from "../../utils/TypingDelay";
import CharacterCard from "./CharacterCard";
import NotFoundPage from "../NotFoundComponent";
import FilmSelect from "../FilmSelect";
import PlanetSelect from "../PlanetSelect";



const CharacterCards = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(-1);
  const [error, setError] = useState<boolean>(false);
  const [selectedFilm, setSelectedFilm] = useState<string>("");
  const [selectedPlanet, setSelectedPlanet] = useState<string>("");


  const { openCharacterModal } = useCharacterContext();

  const typeDelaySearch = useTypingDelay(searchTerm, 300);


  const fetchCharacters = useCallback(async (page: number, search: string) => {
    setLoading(true);
    setError(false);
    try {
      const res = await axios.get("https://swapi.dev/api/people", {
        params: { page, search },
      });

      const data = res.data as { results: Character[]; count: number };
      setPageCount(Math.ceil(data.count / 10));
      setCharacters(data.results);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    fetchCharacters(page, typeDelaySearch);
  }, [page, typeDelaySearch, fetchCharacters]);

  const renderCharacters = useMemo(() => {
    let filtered = characters;

    if (selectedFilm) {
      filtered = filtered.filter((char) => char.films.includes(selectedFilm));
    }

    if (selectedPlanet) {
      filtered = filtered.filter((char) => char.homeworld === selectedPlanet);
    }
    if (loading) return (
      <>
        <Loading />
        {Array.from({ length: 6 }).map((_, i) => (
          <Grid size={{ xs: 12, sm: 3, md: 2 }} key={`skeleton-${i}`}>
            <Skeleton variant="rectangular" height={250} />
          </Grid>
        ))}
      </>
    );

    if (filtered.length === 0 && searchTerm !== "") return <NotFoundPage />;

    if (error) return <NotFoundPage error />

    return filtered.map((char) => (
      <CharacterCard key={char.name} character={char} onClick={() => openCharacterModal(char)} />
    ));
  }, [loading, characters, openCharacterModal, searchTerm, selectedFilm, selectedPlanet, error]);

  return (
    <Box px={2} py={4}>
      <Grid container spacing={2} justifyContent="center" alignItems="fex-start" mb={3}>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <FilmSelect selectedFilm={selectedFilm} setSelectedFilm={setSelectedFilm} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4, md: 3 }}>
          <PlanetSelect selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} />
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 4 }}>
          <TextField
            variant="outlined"
            fullWidth
            label="Keresés név szerint..."
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value); setPage(1)}}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="center" gap={4} >
        {renderCharacters}
        <Grid size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={pageCount}
            variant="outlined"
            shape="rounded"
            onChange={(_, p) => setPage(p)}
          />
        </Grid>
      </Grid>
    </Box>

  );
}
export default CharacterCards;