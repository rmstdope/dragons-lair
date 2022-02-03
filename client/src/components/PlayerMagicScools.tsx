import * as React from "react";
import { Character } from "../queries/getPlayerCharacter";
import { PlayerTable } from "./PlayerTable";

interface Properties {
  character: Character;
}

export default class PlayerMagicSchools extends React.Component<Properties> {
  render() {
    let data = [["Magiskolor", "FV", "Erf"]];
    this.props.character.magicSchools.forEach((s) => {
      data.push([s.name, s.skillLevel.toString(), s.experience.toString()]);
    });
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
