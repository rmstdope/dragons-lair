import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Färdighet", "FV", "ERf"],
  ["Klättra", "15", "0"],
  ["Simma", "10", "0"],
];

export default class PlayerSkills extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
