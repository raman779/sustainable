
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom'; 
import ProjectRoutes from './routes/Routes'; 
import { styled } from '@mui/system';
import UserProvider from './store/UserProvider';


const AppContainer = styled('div')(({ theme }) => ({
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center", 
    minHeight: "100%", 
    ...theme.palette.backgroundGradient,
  }));
function App() {
    return (
        <ThemeProvider theme={theme}>
            <UserProvider>
            <Router>
                <AppContainer>
                    <ProjectRoutes />
                </AppContainer>
            </Router>
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
