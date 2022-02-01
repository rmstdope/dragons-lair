import * as React from "react";
import { PlayerTable } from "./PlayerTable";

const data = [
  ["Övrigt", ""],
  [
    "Livsmål",
    "Att störta alla demokratier och införa ett styrelseskick där en liten intellektuell elit bestömmer vad som är bäst för alla.",
  ],
  [
    "Utseende",
    "En rynkig gammal prick, mörk i hyn, bruna ögon och grått långt hår. Skägg som når ner till bröstet. Kutryggig och stödjer sig ofta på sin stav.",
  ],
];

export default class PlayerLongerOther extends React.Component {
  render() {
    return <PlayerTable Data={data}></PlayerTable>;
  }
}
