import React from 'react';
import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  Value1: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  offClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const AddButton: FC<Props> = ({ Value1, onClick, offClick }) => {
  return Value1 ? (
    <div>
      <IconButton color="inherit" onClick={offClick}>
        <CloseIcon />
      </IconButton>
    </div>
  ) : (
    <IconButton color="inherit" onClick={onClick}>
      <AddIcon />
    </IconButton>
  );
};

export default AddButton;
