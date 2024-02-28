import React, { useState } from 'react';
import { styled } from '@mui/system';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { IconButton, Typography, Box, Drawer,  } from "@mui/material";
import { logOut } from '../../utils';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
const ButtonContainer = styled("div")(({ theme }) => ({
  backgroundColor: "black",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  cursor: 'pointer',
}));
const StyledLogoutIcon = styled(LogoutIcon)(({ theme }) => ({
  marginRight: theme.spacing(1), 
  color: '#ffffff', 
}));
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderBottom: '1px solid #ffffff',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  borderRadius: theme.shape.borderRadius, 
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  fontSize:'1.2rem'
}));
const IconButtonContainer = ({ icon, label, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
      }}
    >
      {icon}
      <Typography sx={{ fontSize: '1.25rem' }}>{label}</Typography>
    </IconButton>
  );
};

const BottomBar = ({ buttonInputs }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <ListItem disablePadding>
        <StyledListItemButton onClick={() => logOut()}>
          <StyledLogoutIcon /> 
          <ListItemText primary="Log Out" />
        </StyledListItemButton>
      </ListItem>
    </List>
    </Box>
  );

  return (
    <>
      <ButtonContainer>
        <IconButtonContainer onClick={buttonInputs[0].onClick} icon={<HomeSharpIcon sx={{ fontSize: '2.5rem' }} />} label={buttonInputs[0].text} />
        <IconButtonContainer onClick={buttonInputs[1].onClick} icon={<AddSharpIcon sx={{ fontSize: '2.5rem' }} />} label={buttonInputs[1].text} />
        <IconButtonContainer onClick={() => setOpen(true)} icon={<AccountCircleSharpIcon sx={{ fontSize: '2.5rem' }} />} label={buttonInputs[2].text} />
      </ButtonContainer>
      <Drawer open={open} onClose={toggleDrawer(false)}  anchor={"right"}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default BottomBar;
