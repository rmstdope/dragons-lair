import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  ["Elementarmagi", "15", "0"],
  ["Mentalism", "10", "0"],
];

export default class PlayerMagicSchools extends React.Component {
  render() {
    return (
      <PlayerTable
        row1="Magiskolor"
        row2="FV"
        row3="Erf"
        Data={data}
      ></PlayerTable>
    );
  }
}
