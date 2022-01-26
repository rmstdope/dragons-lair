import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  {
    name: "Styrka",
    value1: 15,
    value2: 3,
  },
  {
    name: "Fysik",
    value1: 13,
    value2: 2,
  },
  {
    name: "Storlek",
    value1: 10,
    value2: 2,
  },
  {
    name: "Smidighet",
    value1: 12,
    value2: 2,
  },
  {
    name: "Intelligens",
    value1: 16,
    value2: 2,
  },
  {
    name: "Psykisk Kraft",
    value1: 17,
    value2: 3,
  },
  {
    name: "Karisma",
    value1: 7,
    value2: 1,
  },
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
