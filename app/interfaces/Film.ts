import Character from "./Character";
import Planet from "./Planet";

interface Film {
    characters: string[] | Character[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[] | Planet[];
    producer: string;
    release_date: Date;
    species: string[] ;
    starships: string[] ;
    title: string;
    url: string;
    vehicles: string[];
}
export default Film;