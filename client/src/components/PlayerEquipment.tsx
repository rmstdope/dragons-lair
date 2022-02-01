import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Utrustning", "BEP"],
  ["Grunka", "20"],
  ["Pryttel", "4"],
  ["Atteralj", "3"],
];

export default class PlayerEquipment extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
