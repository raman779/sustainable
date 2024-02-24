import { styled } from '@mui/system';
import Container from '@mui/material/Container';



const StyledPaper = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width:'30vw',
    height:'100vh',
    [theme.breakpoints.down('md')]: {
      width:'100vw',
    },
  }));



  const MainContainer = ({children}) => {
    return(

            <StyledPaper
            elevation={3}
            >
                {children} 
            </StyledPaper>

    )
  }

  export default MainContainer;