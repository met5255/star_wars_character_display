import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Film from "@/app/interfaces/Film";

interface Props {
  selectedFilm: string;
  setSelectedFilm: (filmUrl: string) => void;
}

const FilmSelect = ({ selectedFilm, setSelectedFilm }: Props) => {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const res = await axios.get("https://swapi.dev/api/films");
        setFilms((res.data as { results: Film[] }).results);
      } catch (err) {
        console.error("Filmek betöltése sikertelen", err);
      }
    };

    fetchFilms();
  }, []);

  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Szűrés film szerint</InputLabel>
      <Select
        value={selectedFilm}
        onChange={(e) => setSelectedFilm(e.target.value)}
        label="Szűrés film szerint"
      >
        <MenuItem value="">Összes</MenuItem>
        {films.map((film) => (
          <MenuItem key={film.url} value={film.url}>
            {film.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilmSelect;
