import React, { useState } from 'react';
import { Box, Typography, Grid, Button, TextField, AppBar, Toolbar } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [isDel, setIsDel] = useState(false);
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const [boxes, setBoxes] = useState<BoxData[]>([]);

  interface BoxData {
    id: number;
    first: string;
    second: string;
    third: string;
    fourth: string;
  }

  const handleCompletion = () => {
    const newBox: BoxData = {
      id: boxes.length,
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
  //追加と削除ボタンの管理
  const AddButton = () => {
    const handleClick = () => {
      setIsEditing(true);
    };

    const stopEditingHandler = () => {
      setIsEditing(false);
    };

    return isEditing ? (
      <div>
        <IconButton color="inherit" onClick={stopEditingHandler}>
          <CloseIcon />
        </IconButton>
      </div>
    ) : (
      <IconButton color="inherit" onClick={handleClick}>
        <AddIcon />
      </IconButton>
    );
  };
  const DelButton = () => {
    const handleClick = () => {
      setIsDel(true);
    };

    const stopEditingHandler = () => {
      setIsDel(false);
    };

    return isDel ? (
      <div>
        <IconButton color="inherit" onClick={stopEditingHandler}>
          <CloseIcon />
        </IconButton>
      </div>
    ) : (
      <IconButton color="inherit" onClick={handleClick}>
        <DeleteIcon />
      </IconButton>
    );
  };
  //デリートをおすと配列内の要素を空にする
  const handleDelete = (id: number) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };
  //本処理
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
                <DelButton />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      {
        //入力フォーム
      }
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
      {
        //生成されたリスト
      }
      <div>
        <Grid container spacing={2}>
          {boxes.map((box) => (
            <Grid item xs={12} md={6} lg={4} key={box.id}>
              <Box
                sx={{
                  display: 'flex',
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  borderRadius: 2,
                  p: 2,
                  mt: 4,
                }}
              >
                <Grid container direction="column" alignItems="stretch" spacing={2}>
                  <Grid item>
                    {box.first ? (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          bgcolor: 'background.paper',
                        }}
                      >
                        <Checkbox edge="start" tabIndex={-1} disableRipple />
                        <Typography variant="body1" component="div">
                          {box.first}
                        </Typography>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item>
                    {box.second ? (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          bgcolor: 'background.paper',
                        }}
                      >
                        <Checkbox edge="start" tabIndex={-1} disableRipple />
                        <Typography variant="body1" component="div">
                          {box.second}
                        </Typography>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item>
                    {box.third ? (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          bgcolor: 'background.paper',
                        }}
                      >
                        <Checkbox edge="start" tabIndex={-1} disableRipple />
                        <Typography variant="body1" component="div">
                          {box.third}
                        </Typography>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Grid>
                  <Grid item>
                    {box.fourth ? (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          bgcolor: 'background.paper',
                        }}
                      >
                        <Checkbox edge="start" tabIndex={-1} disableRipple />
                        <Typography variant="body1" component="div">
                          {box.fourth}
                        </Typography>
                      </Box>
                    ) : (
                      ''
                    )}
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-end" alignItems="center">
                  {isDel ? (
                    <IconButton color="error" onClick={() => handleDelete(box.id)}>
                      <DeleteIcon />
                    </IconButton>
                  ) : (
                    ''
                  )}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default App;
