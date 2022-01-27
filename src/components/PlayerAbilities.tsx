import * as React from "react";
import PlayerTable from "./PlayerTable";

const data = [["Stålnäve"], ["Allkännare"]];

export default class PlayerSkills extends React.Component {
  render() {
    return <PlayerTable row1="Hjälteförmågor" Data={data}></PlayerTable>;
  }
}
