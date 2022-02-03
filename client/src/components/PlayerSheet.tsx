import { Grid } from "@mui/material";
import React from "react";
import { Character } from "../queries/getPlayerCharacter";
import PlayerAbilities from "./PlayerAbilities";
import PlayerAttributes from "./PlayerAttributes";
import PlayerBodyParts from "./PlayerBodyParts";
import PlayerCoins from "./PlayerCoins";
import PlayerEquipment from "./PlayerEquipment";
import PlayerLanguages from "./PlayerLanguages";
import PlayerLongerOther from "./PlayerLongerOther";
import PlayerMagicSchools from "./PlayerMagicScools";
import PlayerOther from "./PlayerOther";
import PlayerShields from "./PlayerShields";
import PlayerSkills from "./PlayerSkills";
import PlayerSpells from "./PlayerSpells";
import PlayerWeapons from "./PlayerWeapons";

interface Properties {
  character: Character;
}

export default class PlayerSheet extends React.Component<Properties> {
  render() {
    return (
      <div>
        <Grid container direction="row">
          <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
            <PlayerAttributes character={this.props.character} />
          </Grid>
          <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
            <PlayerOther character={this.props.character} />
          </Grid>
          <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
            <PlayerMagicSchools character={this.props.character} />
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
            <PlayerAbilities />
          </Grid>
          <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
            <PlayerBodyParts />
          </Grid>
          <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
            <PlayerCoins character={this.props.character} />
          </Grid>
          <Grid item sm={8} md={6} padding="10px 0px 10px 0px">
            <PlayerWeapons />
          </Grid>
          <Grid item sm={8} md={6} padding="10px 0px 10px 0px">
            <PlayerShields />
          </Grid>
          <Grid item sm={6} md={4} padding="10px 0px 10px 0px">
            <PlayerEquipment />
          </Grid>
          <Grid item sm={6} md={8} padding="10px 0px 10px 0px">
            <PlayerLongerOther character={this.props.character} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
