import * as React from "react";
import { Character } from "../queries/getPlayerCharacter";
import { PlayerTable } from "./PlayerTable";

interface Properties {
  character: Character;
}

export default class PlayerCoins extends React.Component<Properties> {
  render() {
    const data = [
      ["Mynt", "Guld", "Silver", "Koppar"],
      [
        "Bärande",
        this.props.character.goldCarried.toString(),
        this.props.character.silverCarried.toString(),
        this.props.character.copperCarried.toString(),
      ],
      [
        "I förvar",
        this.props.character.goldInStorage.toString(),
        this.props.character.silverInStorage.toString(),
        this.props.character.copperInStorage.toString(),
      ],
    ];
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
