import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Mynt", "Guld", "Silver", "Koppar"],
  ["Bärande", "20", "65", "10"],
  ["I förvar", "204", "365", "160"],
];

export default class PlayerCoins extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
