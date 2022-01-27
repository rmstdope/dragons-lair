import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  ["Klättra", "15", "0"],
  ["Simma", "10", "0"],
];

export default class PlayerSkills extends React.Component {
  render() {
    return (
      <PlayerTable
        row1="Färdighet"
        row2="FV"
        row3="Erf"
        Data={data}
      ></PlayerTable>
    );
  }
}
