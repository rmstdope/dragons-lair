import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  ["Bonuserfarenhetspoäng", "5"],
  ["Hjältepoäng", "3"],
  ["Skadebonus", "3"],
  ["Svärdshand", "Höger"],
  ["Förflyttning", "L10"],
  ["Bärförmåga", "30"],
  ["Utnyttjade BEP", "22"],
];

export default class PlayerExperience extends React.Component {
  render() {
    return <PlayerTable row1="Övrigt" row2="" Data={data}></PlayerTable>;
  }
}
