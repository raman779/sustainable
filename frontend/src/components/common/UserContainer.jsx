import { Avatar, IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system"
import theme from "../../styles/theme";
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
const Container = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
}));

const ButtonContainer = styled("div")(({ theme }) => ({
    height: "7rem",
    backgroundColor: "black",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
}))

const UserContainer = ({ children , homeOnCLick=()=>{}, accountOnClick=()=>{}, addOnCLick=()=>{}}) => {
    return (
        <Container>
            <Box p={theme.spacing(2)} display={"flex"} alignItems={"center"} justifyContent={"space-between"} sx={{ height: "6rem" }}>
                <Box display={"flex"} alignItems={"center"}>
                    <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg" />
                    <Box textAlign={"left"} paddingInline={theme.spacing(2)}>
                        <Typography variant="h6" fontWeight={"600"}>Dani's Group</Typography>
                        <Typography variant="body1">Set-up Your Group</Typography>
                    </Box>
                </Box>
                <EditCalendarOutlinedIcon color="error" />
            </Box>
            {children}
            <ButtonContainer>
                <IconButton sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#fff'
                }}>
                    
                    <HomeSharpIcon sx={{fontSize:'3rem'}} />
                    <Typography sx={{fontSize:'1.25rem'}}>Home</Typography>
                </IconButton>
                <IconButton sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#fff'
                }}>
                    <AddSharpIcon sx={{fontSize:'3rem'}} />
                    <Typography sx={{fontSize:'1.25rem'}}>Add Disciple</Typography>
                </IconButton>
                <IconButton sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#fff'
                }}>
                    <AccountCircleSharpIcon  sx={{fontSize:'3rem'}} />
                    <Typography sx={{fontSize:'1.25rem'}}>Profile</Typography>
                </IconButton>
            </ButtonContainer>
        </Container>
    )
}

export default UserContainer;
