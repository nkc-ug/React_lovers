import React from 'react';
import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  Value2: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  offClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const DelButton: FC<Props> = ({ Value2, onClick, offClick }) => {
  return Value2 ? (
    <div>
      <IconButton color="inherit" onClick={offClick}>
        <CloseIcon />
      </IconButton>
    </div>
  ) : (
    <IconButton color="inherit" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DelButton;
