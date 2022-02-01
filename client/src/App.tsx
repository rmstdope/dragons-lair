import PlayerHeader from "./components/PlayerHeader";
import PlayerSheet from "./components/PlayerSheet";
import "./App.css";
import { Grid } from "@mui/material";

export default function App() {
  return (
    <Grid container direction="column">
      <Grid item sx={{ backgroundColor: "#101010" }}>
        <PlayerHeader
          name="Noogal Vindspinnare"
          image="https://assets.dicebreaker.com/0-dungeons-and-dragons-wizard-5e-guide.png/BROK/thumbnail/1200x1200/quality/100/0-dungeons-and-dragons-wizard-5e-guide.png"
        />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1} sx={{}} />
        <Grid item xs={12} sm={10} sx={{}}>
          <PlayerSheet />
          {/* <img src="https://www.tribality.com/wp-content/uploads/2019/07/andreas-rocha-fieldsofgold011-750x375.jpg" height="100%"/> */}
          {/* <div className="sheet borderdebug">
            <img src="https://www.tribality.com/wp-content/uploads/2019/07/andreas-rocha-fieldsofgold011-750x375.jpg"/>
            <PlayerSheet />
          </div> */}
        </Grid>
        <Grid item xs={0} sm={1} sx={{}} />
      </Grid>
    </Grid>
  );
}
