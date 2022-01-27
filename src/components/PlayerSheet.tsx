import { Grid } from "@mui/material";
import React from "react";
import PlayerAbilities from "./PlayerAbilities";
import PlayerAttributes from "./PlayerAttributes";
import PlayerLanguages from "./PlayerLanguages";
import PlayerMagicSchools from "./PlayerMagicScools";
import PlayerOther from "./PlayerOther";
import PlayerSkills from "./PlayerSkills";
import PlayerSpells from "./PlayerSpells";

export default function PlayerSheet() {
  return (
    <div>
      <Grid container direction="row">
        <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
          <PlayerAttributes />
        </Grid>
        <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
          <PlayerMagicSchools />
        </Grid>
        <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
          <PlayerSpells />
        </Grid>
        <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
          <PlayerSkills />
        </Grid>
        <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
          <PlayerLanguages />
        </Grid>
        <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
          <PlayerOther />
        </Grid>
        <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
          <PlayerAbilities />
        </Grid>
      </Grid>
    </div>
  );
}
