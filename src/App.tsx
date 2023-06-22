import React, { useState } from 'react';
import { Box, Typography, Grid, AppBar, Toolbar } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddButton from './AddButton';
import DelButton from './DelButton';
import { Form } from './Form';

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
  const AddClick = () => {
    setIsEditing(true);
  };
  const CloseAddHandler = () => {
    setIsEditing(false);
  };

  const DeleteClick = () => {
    setIsDel(true);
  };
  const CloseDeleteHandler = () => {
    setIsDel(false);
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
                <AddButton Value1={isEditing} offClick={CloseAddHandler} onClick={AddClick} />
              </Grid>
              <Grid item xs sx={{ textAlign: 'center' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  ToDoRist
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <DelButton Value2={isDel} offClick={CloseDeleteHandler} onClick={DeleteClick} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      {
        //入力フォーム
      }
      <Form
        Value3={isEditing}
        first={first}
        second={second}
        third={third}
        fourth={fourth}
        handleCompletion={handleCompletion}
        setFirst={setFirst}
        setSecond={setSecond}
        setThird={setThird}
        setFourth={setFourth}
      />
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
