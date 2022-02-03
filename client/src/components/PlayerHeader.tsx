import { Avatar, AppBar, Grid, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { Character } from "../queries/getPlayerCharacter";

interface Properties {
  character: Character;
}

export default class PlayerHeader extends React.Component<Properties> {
  render() {
    return (
      <AppBar position="static" style={{ padding: "10px" }}>
        <Toolbar>
          <Avatar
            alt={this.props.character.name}
            src={this.props.character.image}
            sx={{ width: 80, height: 80 }}
          />
          <Grid container direction="column" style={{ paddingLeft: "10px" }}>
            <Grid item>
              <Typography
                sx={{
                  backgroundImage: "none",
                  fontSize: 24,
                  fontWeight: "bold",
                  fontFamily: "Monospace",
                }}
              >
                {this.props.character.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundImage: "none",
                  color: "text.secondary",
                  fontSize: 12,
                  fontStyle: "italic",
                  fontFamily: "default",
                  textTransform: "uppercase",
                }}
              >
                {this.props.character.race} ({this.props.character.gender}),{" "}
                {this.props.character.age} år
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  backgroundImage: "none",
                  fontSize: 14,
                  fontFamily: "Monospace",
                  textTransform: "uppercase",
                }}
              >
                {this.props.character.occupation}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      // <div className="header borderdebug">
      //     <div className="avatarimage borderdebug">
      //         <Avatar alt={this.props.name} src={this.props.image} sx={{ width: 80, height: 80 }} onClick={() => { console.log('onClick'); }}/>

      //     </div>
      //     <div className="avatartext borderdebug">
      //         <Stack>
      //             <Paper sx={{ backgroundImage: 'none', fontSize: 24, fontWeight: 'bold', fontFamily: 'Monospace'}}>
      //                 {this.props.name}
      //             </Paper>
      //             <Paper sx={{ backgroundImage: 'none', color: 'text.secondary', fontSize: 12, fontStyle: 'italic', fontFamily: 'default', textTransform: 'uppercase'}}>
      //                 Människa (Man), 56 år
      //             </Paper>
      //             <Paper sx={{ backgroundImage: 'none', fontSize: 14, fontFamily: 'Monospace', textTransform: 'uppercase'}}>
      //                 Trollkarl
      //             </Paper>
      //         </Stack>
      //     </div>
      // </div>
    );
  }
}
