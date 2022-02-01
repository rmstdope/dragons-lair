import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Kroppsdelar", "KP", "Material", "Abs", "Vikt"],
  ["Vänster Arm", "4", "-", "0", "0"],
  ["Höger Arm", "4", "-", "0", "0"],
  ["Vänster Ben", "5", "-", "0", "0"],
  ["Höger Ben", "5", "-", "0", "0"],
  ["Huvud", "4", "Läderhjälm", "3", "1"],
];

export default class PlayerBodyParts extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
