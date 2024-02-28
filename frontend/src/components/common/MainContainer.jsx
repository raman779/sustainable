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
    [theme.breakpoints.down('sm')]: {
      width:'100vw',
      margin:'auto'
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