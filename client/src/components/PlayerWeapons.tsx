import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Vapen", "FV", "Skada", "BV", "Vapenl", "Räckv", "Erf", "Vikt"],
  ["Stav", "12", "1T4", "10", "2", "-", "0", "3"],
  ["Tvåhandsyxa", "2", "1T12", "20", "2", "-", "0", "5"],
];

export default class PlayerWeapons extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
