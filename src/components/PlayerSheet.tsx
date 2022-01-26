import { Grid } from "@mui/material";
import React from "react";
import PlayerAttributes from "./PlayerAttributes";
import PlayerSkills from "./PlayerSkills";

export default function PlayerSheet() {
  return (
    <Grid container direction="row">
      <Grid item padding="5px">
        <PlayerAttributes />
      </Grid>
      <Grid item padding="5px">
        <PlayerSkills />
      </Grid>
    </Grid>
  );
}
