import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Övrigt", ""],
  ["Bonuserfarenhetspoäng", "5"],
  ["Hjältepoäng", "3"],
  ["Skadebonus", "3"],
  ["Svärdshand", "Höger"],
  ["Förflyttning", "L10"],
  ["Bärförmåga", "30"],
  ["Utnyttjade BEP", "22"],
  ["Socialt stånd", "Ja"],
  ["Hemort", "Triclive"],
  ["Psykisk Kraft", "18/20"],
  ["Kroppspoäng", "15/15"],
];

export default class PlayerOther extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
