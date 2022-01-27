import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [
  ["Människospråk", "5", "3", "0"],
  ["Dvärgiska", "3", "2", "0"],
];

export default class PlayerLanguages extends React.Component {
  render() {
    return (
      <PlayerTable
        row1="Språk"
        row2="Tala"
        row3="L/S"
        row4="Erf"
        Data={data}
      ></PlayerTable>
    );
  }
}
