
import Character from "@/app/interfaces/Character";
import { Card, CardActionArea, CardContent, CardMedia, Grid2 as Grid, Pagination, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { useCharacterContext } from '../../contexts/CharacterContext';


const CharacterCards = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(-1);
  const [error, setError] = useState<string | null>(null);
  const { openCharacterModal } = useCharacterContext();


  const fetchCharacters = async (page: number, serachTerm: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("https://swapi.dev/api/people", {
        params: { page, search: serachTerm },
      });
      if (pageCount === -1) {
        setPageCount(Math.ceil((res.data as { count: number }).count / 10));
      }
      setCharacters((res.data as { results: Character[] }).results);
    } catch (err) {
      setError("Hiba a karakterek lekérdezése során");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page, searchTerm);
  }, [page, searchTerm]);

  return (
    <>
      <TextField
        variant="outlined"
        fullWidth
        label="Keresés név szerint..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 4 }}
      />

      <Grid container gap={4} spacing={2}>
        {loading && <Loading />}
        {characters.map((char) => (
          <Grid
            size={{ xs: 12, sm: 3, md: 2 }}
            key={char.name}
            onClick={() => openCharacterModal(char)}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height={200}
                  width={200}
                  image={`https://picsum.photos/seed/${char.name}/200/200`}
                  alt={char.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {char.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >
                    Születési dátum: {char.birth_year}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Grid size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "center" }}>
          <Pagination count={pageCount} variant="outlined" shape="rounded" onChange={(_, p) => setPage(p)} />
        </Grid>
      </Grid>
    </>
  );
}
export default CharacterCards;