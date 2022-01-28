import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [["Hjälteförmågor"], ["Stålnäve"], ["Allkännare"]];

export default class PlayerSkills extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
