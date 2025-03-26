import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Planet from "@/app/interfaces/Planet";

interface Props {
  selectedPlanet: string;
  setSelectedPlanet: (planetUrl: string) => void;
}

const PlanetSelect = ({ selectedPlanet, setSelectedPlanet }: Props) => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const res = await axios.get("https://swapi.dev/api/planets");
        setPlanets((res.data as { results: Planet[] }).results);
      } catch (err) {
        console.error("Bolygók betöltése sikertelen", err);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>Szűrés bolygó szerint</InputLabel>
      <Select
        value={selectedPlanet}
        onChange={(e) => setSelectedPlanet(e.target.value)}
        label="Szűrés bolygó szerint"
      >
        <MenuItem value="">Összes</MenuItem>
        {planets.map((planet) => (
          <MenuItem key={planet.url} value={planet.url}>
            {planet.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlanetSelect;