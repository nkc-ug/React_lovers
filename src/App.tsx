import * as React from "react";
//上のバー
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [first, setfirst] = useState("");

  const AddButtone = () => {
    const handleClick = () => {
      setIsEditing(true);
    };
    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    return isEditing ? (
      <div>
        <Button color="inherit" onClick={stopEditingHandler}>
          Can
        </Button>
      </div>
    ) : (
      <Button color="inherit" onClick={handleClick}>
        add
      </Button>
    );
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs="auto">
                <AddButtone />
              </Grid>
              <Grid item xs sx={{ textAlign: "center" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  ToDoRist
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Button color="inherit">del</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        {isEditing ? (
          <Box
            component="form"
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 4,
              minWidth: 100,
            }}
          >
            <Grid container spacing={2}>
              <Grid xs={12}>
                <TextField
                  id="outlined-basic"
                  value={first}
                  label="RistName"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={4}>
                <TextField
                  id="standard-basic"
                  label="NextTask"
                  variant="standard"
                />
              </Grid>
              <Grid xs={4}>
                <TextField
                  id="standard-basic"
                  label="NextTask"
                  variant="standard"
                />
              </Grid>
              <Grid xs={4}>
                <TextField
                  id="standard-basic"
                  label="NextTask"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={10}></Grid>
              <Grid xs={2}>
                <Button variant="contained">completion</Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
