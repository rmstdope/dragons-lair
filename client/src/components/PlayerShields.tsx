import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Sköld", "FV", "Abs", "Erf", "Vikt"],
  ["Liten träsköld", "4", "8", "0", "5"],
];

export default class PlayerShields extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
