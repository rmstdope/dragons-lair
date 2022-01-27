import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  ["Styrka", "15", "3"],
  ["Fysik", "13", "2"],
  ["Storlek", "10", "2"],
  ["Smidighet", "12", "2"],
  ["Intelligens", "16", "2"],
  ["Psykisk Kraft", "17", "3"],
  ["Karisma", "7", "1"],
];

export default class PlayerAttributes extends React.Component {
  render() {
    return (
      <PlayerTable
        row1="Grundegenskaper"
        row2="Värde"
        row3="Grupp"
        Data={data}
      ></PlayerTable>
    );
  }
}
