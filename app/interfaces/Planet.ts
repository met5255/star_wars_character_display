import Character from "./Character";
import Film from "./Film";

interface Planet {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: string[] | Film[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[] | Character[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}
export default Planet;