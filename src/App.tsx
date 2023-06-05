import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField, AppBar, Toolbar } from '@mui/material';

interface BoxData {
  id: number;
  first: string;
  second: string;
  third: string;
  fourth: string;
}

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [boxes, setBoxes] = useState<BoxData[]>([]);

  const handleCompletion = () => {
    const newBox: BoxData = {
      id: boxes.length + 1,
      first,
      second,
      third,
      fourth,
    };

    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
    setIsEditing(false);
    setFirst('');
    setSecond('');
    setThird('');
    setFourth('');
  };

  const AddButton = () => {
    const handleClick = () => {
      setIsEditing(true);
    };

    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    return isEditing ? (
      <div>
        <Button color="inherit" onClick={stopEditingHandler}>
          Cancel
        </Button>
      </div>
    ) : (
      <Button color="inherit" onClick={handleClick}>
        Add
      </Button>
    );
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item xs="auto">
                <AddButton />
              </Grid>
              <Grid item xs sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  ToDoRist
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Button color="inherit">Delete</Button>
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
              bgcolor: 'background.paper',
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
                  onChange={(e) => {
                    setFirst(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={4}>
                <TextField
                  id="standard-basic"
                  label="NextTask"
                  variant="standard"
                  value={second}
                  onChange={(e) => {
                    setSecond(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={4}>
                <TextField
                  id="standard-basic"
                  label="NextTask"
                  variant="standard"
                  value={third}
                  onChange={(e) => {
                    setThird(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={4}>
                <TextField
                  id="standard-basic"
                  label="NextTask"
                  variant="standard"
                  value={fourth}
                  onChange={(e) => {
                    setFourth(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid xs={10}></Grid>
              <Grid xs={2}>
                <Button variant="contained" onClick={handleCompletion}>
                  Completion
                </Button>{' '}
              </Grid>
            </Grid>
          </Box>
        ) : (
          ''
        )}
      </div>
      <div>
        {boxes.map((box) => (
          <Box
            key={box.id}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              mt: 4,
            }}
          >
            <Typography variant="body1" component="div">
              {box.first}
            </Typography>
            <Typography variant="body1" component="div">
              {box.second}
            </Typography>
            <Typography variant="body1" component="div">
              {box.third}
            </Typography>
            <Typography variant="body1" component="div">
              {box.fourth}
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
}

export default App;
