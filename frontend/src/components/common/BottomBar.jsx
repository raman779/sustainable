import React from 'react';
import { styled } from '@mui/system';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { IconButton, Typography } from "@mui/material";


const ButtonContainer = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  cursor: 'pointer',
}));

const IconButtonContainer = ({ icon, label ,onClick}) => {
  return (
    <IconButton
        onClick={() => {onClick()}}
        sx={{
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
    }}>
      {icon}
      <Typography sx={{ fontSize: '1.25rem' }}>{label}</Typography>
    </IconButton>
  );
};

const BottomBar = ({buttonInputs}) => {
  return (
    <ButtonContainer>
      <IconButtonContainer onClick={() => buttonInputs[0].onClick()} icon={<HomeSharpIcon />} label={buttonInputs[0].text} />
      <IconButtonContainer onClick={() => buttonInputs[1].onClick()} icon={<AddSharpIcon />} label={buttonInputs[1].text}/>
      <IconButtonContainer onClick={() => buttonInputs[2].onClick()} icon={<AccountCircleSharpIcon />} label={buttonInputs[2].text}/>
    </ButtonContainer>
  );
};

export default BottomBar;
