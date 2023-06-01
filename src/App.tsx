import { Box, Button, Stack, Typography} from "@mui/material";
import { useEffect, useState } from "react";
function App() {
  const cal = [11,22,33,44];
  const Array = [7,4,1];
  const [Count, setCount] = useState<number>(0);
  const [c,setc] = useState<number>(0);          
  const [tank,settank] =useState<number>(0);        //左辺
  //const [cal,setcal]=useState<number>(0);

  const handle = (num: number) => {
    if(num===456){                //リセット
      setCount(Count * 0);
      settank(0);
      setc(0);
    }else if(num===123){           //+をおす
      settank(Count);
      setCount(Count * 0);
      setc(0);
    }else if(num===246){           //イコール
      setCount(Count + tank);
      setc(0);
    }else{                         //加算処理
      if(c===1){                   //+ C が押されていない状態の場合10を掛け位を上げる
        setCount(Count*10+num);
      }else{
      setCount(Count + num);
      setc(1);
      }
    }
  };
  useEffect(() => {
    console.log("logs");
  }, [Count]);

  return (
    <Stack 
      alignItems='center'
      sx={{ m: 10, p: 3, border: "0.5px solid", borderRadius: 3, borderColor: "black",bgcolor:"white" }}
    >
      <Box>
        <Typography
          variant='h5'
          sx={{ textAlign: "flex-end", border: "0.5px solid",borderColor: "black" ,bgcolor: "white", color: "black" }}
        >
          {Count}
        </Typography>

      <Stack direction="row">
        <Stack direction="column">
        {Array.map((i) => {
        return (
          <Stack
          key={i+1}
          direction='row'>
          <Box>
            <Button 
              variant='contained'
              onClick={() => {
                handle(i);
              }}
            >
              {i}
            </Button>
          </Box>

          <Box>
            <Button
              variant='contained'
              onClick={() => {
                handle(i+1);
              }}
            >
              {i+1}
            </Button>
          </Box>

          <Box>
            <Button
              variant='contained'
              onClick={() => {
                handle(i+2);
              }}
            >
              {i+2}
            </Button>
          </Box>
          </Stack>
        );
      })}

        <Stack 
        direction="row"
        alignContent="center"
        > 
          <Box sx={{textAlign: "center" }}> 
          <Button
              variant='contained'
              onClick={() => {
                handle(456);
              }}
            >
              {"c"}
            </Button>
            </Box>
            <Box sx={{textAlign: "center" }}> 
          <Button
              variant='contained'
              onClick={() => {
                handle(0);
              }}
            >
              {0}
            </Button>
            </Box>
            <Box sx={{textAlign: "center" }}> 
          <Button
              variant='contained'
              onClick={() => {
                handle(246);
              }}
            >
              {"="}
            </Button>
            </Box>
            </Stack>
            </Stack>

          
            <Stack direction="column">
            <Box sx={{textAlign: "center" }}>
              {cal.map((j)=>{
                return(
                  <Stack direction="column">
                  <Button
                  variant='contained'
                  onClick={() => {
                    handle(j);
                  }}
                >
                  {j}
                </Button>
                </Stack>  
              );
              })}
            </Box>


            </Stack>

        
        </Stack>
      </Box>
    </Stack>
  );
}

export default App;
