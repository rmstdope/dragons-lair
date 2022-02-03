import * as React from "react";
import { Character } from "../queries/getPlayerCharacter";
import { PlayerTable } from "./PlayerTable";

interface Properties {
  character: Character;
}

function toGroup(value: number): number {
  if (value < 4) return 0;
  if (value < 9) return 1;
  if (value < 13) return 2;
  if (value < 17) return 3;
  if (value < 21) return 4;
  // TODO: Complete table
  return -1;
}

export default class PlayerAttributes extends React.Component<Properties> {
  render() {
    const data = [
      ["Grundegenskaper", "Värde", "Grupp"],
      [
        "Styrka",
        this.props.character.strength.toString(),
        toGroup(this.props.character.strength).toString(),
      ],
      [
        "Fysik",
        this.props.character.physique.toString(),
        toGroup(this.props.character.physique).toString(),
      ],
      [
        "Storlek",
        this.props.character.size.toString(),
        toGroup(this.props.character.size).toString(),
      ],
      [
        "Smidighet",
        this.props.character.agility.toString(),
        toGroup(this.props.character.agility).toString(),
      ],
      [
        "Intelligens",
        this.props.character.intelligence.toString(),
        toGroup(this.props.character.intelligence).toString(),
      ],
      [
        "Psykisk Kraft",
        this.props.character.phsycicPower.toString(),
        toGroup(this.props.character.phsycicPower).toString(),
      ],
      [
        "Karisma",
        this.props.character.charisma.toString(),
        toGroup(this.props.character.charisma).toString(),
      ],
    ];
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
