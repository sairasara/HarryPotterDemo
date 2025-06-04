import { ImageSourcePropType } from "react-native";

export type House = {
  name: string;
  color: string;
  image: ImageSourcePropType
};

export type CharacterDetails = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null; 
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number | null;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
};

export type RootStackParamList = {
  Houses: undefined;
  Characters: { house: House };
  CharacterDetails: {details: CharacterDetails}
};