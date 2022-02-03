import * as React from "react";
import { Character } from "../queries/getPlayerCharacter";
import { PlayerTable } from "./PlayerTable";

interface Properties {
  character: Character;
}

export default class PlayerLongerOther extends React.Component<Properties> {
  render() {
    const data = [
      ["Övrigt", ""],
      ["Livsmål", this.props.character.lifeGoals],
      ["Utseende", this.props.character.appearance],
    ];
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
