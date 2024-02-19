
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom'; 
import ProjectRoutes from './routes/Routes'; 
import { styled } from '@mui/system';


const AppContainer = styled('div')(({ theme }) => ({
    textAlign: 'center',
    height: '100vh',
    ...theme.palette.backgroundGradient,
  }));
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <AppContainer>
                    <ProjectRoutes />
                </AppContainer>
            </Router>
        </ThemeProvider>
    );
}

export default App;
