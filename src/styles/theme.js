import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fd4958',
        },
        error: {
            main: '#fff',
        },
        secondary: {
            main: '#02140A',
        },
        backgroundGradient: {
            backgroundImage: 'linear-gradient(330deg, #ca0000 64%, #9e0001 58%)',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h3: {
            fontSize: '2rem',
            fontWeight: 900,
            color: '#ffffff',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 400,
            color: '#ffffff',
        },
        h5: {
            fontSize: '1.2rem',
            fontWeight: 400,
            color: '#ffffff',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#ffffff',
        },
        body1: {
            fontSize: '.9rem',
            fontWeight: 400,
            color: '#ffffff',
        },
        body2: {
            fontSize: '0.7rem',
            fontWeight: 400,
            color: '#ffffff',
        },
        subtitle2: {
            fontSize: '0.6rem',
            fontWeight: 400,
            color: '#ffffff',
        },
        button:{
            fontSize: '1rem',
            // fontWeight: 400,
            color: '#ffffff',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '10px',
                    minWidth: '12rem',
                    minHeight: '3rem',
                    fontWeight: '600',
                },
            },
        },
     
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    width:'100%',
                    '& .MuiInputBase-input': {
                        padding: '10px',
                        borderRadius: "12px",
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        color: 'white',
                        height: "2.5rem",
                        fontSize:'1.2rem'
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                        },
                    },
                    '& .MuiInputBase-input:focus': {
                        backgroundColor: 'rgba(255,255,255,0.5)',
                    },
                    '& .MuiInputBase-input::placeholder': {
                        color: 'white',
                    },
                    '& .MuiInputBase-root.Mui-error': {
                        border: "none !important",
                    },
                    '& .MuiFormHelperText-root.Mui-error': {
                        color: "#fff",
                    },
                    '& .MuiInputLabel-root':{
                        fontSize: "1.2rem"
                    }
                },
               
            },
        },
        MuiInputLabel: {
            root: {
               fontSize: "1.2rem"
            },
          },
    },
});

export default theme;
