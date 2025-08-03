import { SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function notfound() {
  return (
    <Paper
        sx={{
            Height: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 6
        }}
    >
        <SearchOff sx={{fontSize: 100}} color='primary'/>
        <Typography gutterBottom variant="h3">
            Opps we could not find what you are looking for
        </Typography>
        <Button fullWidth component={Link} to='/catalog'>
            Go back to shop
        </Button>
    </Paper>
  )
}