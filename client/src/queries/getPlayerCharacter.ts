import { gql } from "graphql-tag";
import internal from "stream";

export const GET_PC_QUERY = gql`
  query getPlayerCharacter($id: Int!) {
    character(id: $id) {
      id
      name
      image
      race
      gender
      age
      occupation
      strength
      physique
      size
      agility
      intelligence
      phsycicPower
      charisma
      bonusExperience
      heroPoints
      swordHand
      movement
      socialPosition
      homeTown
      currentPsy
      currentHp
      goldCarried
      goldInStorage
      silverCarried
      silverInStorage
      copperCarried
      copperInStorage
      lifeGoals
      appearance
      magicSchools {
        name
        skillLevel
        experience
      }
      spells {
        name
        skillLevel
        experience
      }
      skills {
        name
        skillLevel
        experience
      }
      languages {
        name
        speak
        readWrite
        experience
      }
      heroAbilities {
        name
      }
      equipment {
        name
        weight
      }
      weapons {
        name
        damage
        breakValue
        length
        range
        weight
      }
      shields {
        name
        absorbtion
        weight
      }
    }
  }
`;

export interface Character {
  name: string;
  image: string;
  race: string;
  gender: string;
  age: number;
  occupation: string;
  strength: number;
  physique: number;
  size: number;
  agility: number;
  intelligence: number;
  phsycicPower: number;
  charisma: number;
  bonusExperience: number;
  heroPoints: number;
  swordHand: string;
  movement: string;
  socialPosition: string;
  homeTown: string;
  currentPsy: number;
  currentHp: number;
  goldCarried: number;
  goldInStorage: number;
  silverCarried: number;
  silverInStorage: number;
  copperCarried: number;
  copperInStorage: number;
  lifeGoals: string;
  appearance: string;
  magicSchools: {
    name: string;
    skillLevel: number;
    experience: number;
  }[];
  spells: {
    name: string;
    skillLevel: number;
    experience: number;
  }[];
  skills: {
    name: string;
    skillLevel: number;
    experience: number;
  }[];
  languages: {
    name: string;
    speak: number;
    readWrite: number;
    experience: number;
  }[];
  heroAbilities: {
    name: string;
  }[];
  equipment: {
    name: string;
    weight: number;
  }[];
  weapons: {
    name: string;
    damage: string;
    breakValue: number;
    length: number;
    range: number;
    weight: number;
  }[];
  shields: {
    name: string;
    absorbtion: number;
    weight: number;
  }[];
}

// export const GET_PCS_QUERY = gql`
//   query getPlayerCharacters {
//     characters {
//       name
//     }
//   }
// `;
