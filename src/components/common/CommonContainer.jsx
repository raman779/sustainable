import { styled } from '@mui/system';
import Container from '@mui/material/Container';



const StyledPaper = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // height: '70vh',
  
    [theme.breakpoints.down('sm')]: {
      // height: '100vh',
      padding: theme.spacing(4),
      maxWidth:'20rem',
    },
  }));



  const CommonContainer = ({children}) => {
    return(

            <StyledPaper
            elevation={3}
            >
                {children} 
            </StyledPaper>

    )
  }

  export default CommonContainer;