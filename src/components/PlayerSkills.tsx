import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  {
    name: "Klättra",
    value1: 15,
    value2: 0,
  },
  {
    name: "Simma",
    value1: 10,
    value2: 0,
  },
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
