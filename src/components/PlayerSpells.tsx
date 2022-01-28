import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Besvärjelser", "S", "Erf"],
  ["Eld", "15", "0"],
  ["Blixt", "10", "0"],
];

export default class PlayerSpells extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
