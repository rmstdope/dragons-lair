import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Språk", "Tala", "L/S", "Erf"],
  ["Människospråk", "5", "3", "0"],
  ["Dvärgiska", "3", "2", "0"],
];

export default class PlayerLanguages extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
