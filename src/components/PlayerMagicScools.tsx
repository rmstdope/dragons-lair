import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Magiskolor", "FV", "Erf"],
  ["Elementarmagi", "15", "0"],
  ["Mentalism", "10", "0"],
];

export default class PlayerMagicSchools extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
