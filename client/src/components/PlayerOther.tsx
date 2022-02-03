import * as React from "react";
import { Character } from "../queries/getPlayerCharacter";
import { PlayerTable } from "./PlayerTable";

interface Properties {
  character: Character;
}

export default class PlayerOther extends React.Component<Properties> {
  render() {
    const data = [
      ["Övrigt", ""],
      [
        "Bonuserfarenhetspoäng",
        this.props.character.bonusExperience.toString(),
      ],
      ["Hjältepoäng", this.props.character.heroPoints.toString()],
      [
        "Skadebonus",
        calcDamageBonus(
          this.props.character.strength,
          this.props.character.size
        ),
      ],
      ["Svärdshand", this.props.character.swordHand.toString()],
      ["Förflyttning", this.props.character.movement.toString()],
      ["Bärförmåga", "30"],
      ["Utnyttjade BEP", "22"],
      ["Socialt stånd", this.props.character.socialPosition.toString()],
      ["Hemort", this.props.character.homeTown.toString()],
      [
        "Psykisk Kraft",
        this.props.character.currentPsy.toString() +
          "/" +
          this.props.character.phsycicPower.toString(),
      ],
      [
        "Kroppspoäng",
        this.props.character.currentHp.toString() +
          "/" +
          Math.ceil(
            (this.props.character.strength + this.props.character.size) / 2
          ),
      ],
    ];
    return <PlayerTable Data={data}></PlayerTable>;
  }
}

function calcDamageBonus(strength: number, size: number): string {
  let v = Math.ceil((strength + size) / 2);
  if (v < 17) return "-";
  if (v < 21) return "1T4";
  if (v < 26) return "1T6";
  // TODO handle the rest
  return "Unhandled";
}
