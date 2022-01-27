import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  ["Eld", "15", "0"],
  ["Blixt", "10", "0"],
];

export default class PlayerSpells extends React.Component {
  render() {
    return (
      <PlayerTable
        row1="Besvärjelser"
        row2="S"
        row3="Erf"
        Data={data}
      ></PlayerTable>
    );
  }
}
