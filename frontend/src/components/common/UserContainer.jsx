import { Avatar, IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system"
import theme from "../../styles/theme";
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import BottomBar from "./BottomBar";
const Container = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
}));

const UserContainer = ({ children , homeOnCLick=()=>{}, accountOnClick=()=>{}, addOnCLick=()=>{}}) => {
    return (
        <Container>
            <Box p={theme.spacing(2)} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
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
            <BottomBar buttonInputs = {[
                {text:"Home",onClick:() => {console.log("Home")}},
                {text:"Add Disciple",onClick:() => {console.log("Add Disciple")}},
                {text:"Profile",onClick:() => {console.log("Profile")}}
                ]}/>
        </Container>
    )
}

export default UserContainer;
