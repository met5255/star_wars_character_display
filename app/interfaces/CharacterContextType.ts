import Character from "./Character";
import Planet from "./Planet";

interface CharacterContextType {
    selectedCharacter: Character | null;
    planet: Planet | null;
    openCharacterModal: (char: Character) => void;
    closeCharacterModal: () => void;
  }
  export default CharacterContextType;