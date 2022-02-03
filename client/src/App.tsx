import PlayerHeader from "./components/PlayerHeader";
import PlayerSheet from "./components/PlayerSheet";
import "./App.css";
import { Grid } from "@mui/material";
import { useQuery } from "@apollo/react-hooks";
import { GET_PC_QUERY } from "./queries/getPlayerCharacter";

export default function App() {
  const id = 1;
  const { data, loading, error } = useQuery(GET_PC_QUERY, {
    variables: { id },
  });

  const character = data?.character;

  if (loading) return <p>Almost there...</p>;
  if (error) return <p>{error.message}</p>;

  console.log(character);

  return (
    <Grid container direction="column">
      <Grid item sx={{ backgroundColor: "#101010" }}>
        <PlayerHeader character={character} />
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1} sx={{}} />
        <Grid item xs={12} sm={10} sx={{}}>
          <PlayerSheet character={character} />
        </Grid>
        <Grid item xs={0} sm={1} sx={{}} />
      </Grid>
    </Grid>
  );
}
