import { styled } from '@mui/system';
import Container from '@mui/material/Container';



const StyledPaper = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '70vh',
  
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
      padding: theme.spacing(4)
    },
  }));



  const CommonContainer = ({children}) => {
    return(
        <Container component="main" style={{ padding: 0 }} maxWidth="sm">
            <StyledPaper
            elevation={3}
            >
                {children} 
            </StyledPaper>
        </Container>
    )
  }

  export default CommonContainer;