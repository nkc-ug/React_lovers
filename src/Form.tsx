import React from 'react';
import { FC } from 'react';
import { Box, Grid, Button, TextField } from '@mui/material';

type Props = {
  Value3: boolean;
  first: string;
  second: string;
  third: string;
  fourth: string;
  handleCompletion: React.MouseEventHandler<HTMLButtonElement> | undefined;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
  setSecond: React.Dispatch<React.SetStateAction<string>>;
  setThird: React.Dispatch<React.SetStateAction<string>>;
  setFourth: React.Dispatch<React.SetStateAction<string>>;
};

const Form: FC<Props> = (props) => {
  return props.Value3 ? (
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
            value={props.first}
            label="RistName"
            variant="outlined"
            onChange={(e) => {
              props.setFirst(e.target.value);
            }}
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            id="standard-basic"
            label="NextTask"
            variant="standard"
            value={props.second}
            onChange={(e) => {
              props.setSecond(e.target.value);
            }}
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            id="standard-basic"
            label="NextTask"
            variant="standard"
            value={props.third}
            onChange={(e) => {
              props.setThird(e.target.value);
            }}
          />
        </Grid>
        <Grid xs={4}>
          <TextField
            id="standard-basic"
            label="NextTask"
            variant="standard"
            value={props.fourth}
            onChange={(e) => {
              props.setFourth(e.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid xs={10}></Grid>
        <Grid xs={2}>
          <Button variant="contained" onClick={props.handleCompletion}>
            Completion
          </Button>
        </Grid>
      </Grid>
    </Box>
  ) : null;
};

export { Form };
