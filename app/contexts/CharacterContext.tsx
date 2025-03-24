'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import Character from '@/app/interfaces/Character';
import Planet from '@/app/interfaces/Planet';
import axios from 'axios';
import CharacterContextType from '../interfaces/CharacterContextType';

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
};

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [planet, setPlanet] = useState<Planet | null>(null);

  const loadPlanet = async (url: string) => {
    try {
      const res = await axios.get(url);
      setPlanet(res?.data as Planet);
    } catch {
      setPlanet(null);
    }
  };

  const openCharacterModal = (char: Character) => {
    setSelectedCharacter(char);
    loadPlanet(char.homeworld);
  };

  const closeCharacterModal = () => {
    setSelectedCharacter(null);
    setPlanet(null);
  };

  return (
    <CharacterContext.Provider
      value={{
        selectedCharacter,
        planet,
        openCharacterModal,
        closeCharacterModal,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
