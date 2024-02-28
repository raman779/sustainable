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
            fontSize: '1.3rem',
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
        button: {
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
                    fontWeight: '600',
                    width: "100%",
                    '@media (max-width: 600px)': { // Adjust the max-width according to your requirements
                        height: "3.2rem",
                    },
                    '@media (min-width: 601px)': { // Set default height for larger screens
                        height: "2.8rem",
                    },
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(5px)', // Apply a blur effect to the background
                    border: 'none', // Remove the border
                    boxShadow: 'none', // Remove the shadow
                    width: '250px', // Set the drawer width
                    '& .MuiListItemText-primary': {
                        fontSize: '1.2rem', // Set the font size to 1.2rem
                      },
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
                    width: '100%',
                    '& .MuiInputBase-input': {
                        padding: '10px',
                        borderRadius: "12px",
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        color: 'white',
                        height: "2.5rem",
                        fontSize: '1.2rem'
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
                        fontSize:'1rem'
                    },
                    '& .MuiInputBase-root.Mui-error': {
                        border: "none !important",
                    },
                    '& .MuiFormHelperText-root.Mui-error': {
                        color: "#fff",
                    },
                    '& .MuiInputLabel-root': {
                        fontSize: "1.2rem"
                    },
                    '@media (min-width: 600px)': {
                        '& .MuiInputBase-input': {
                            height: "1.6rem",
                        },
                    },
                },

            },
        },
        MuiInputLabel: {
            root: {
                fontSize: "1.2rem"
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    // padding: '10px',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    '& .MuiAlert-message': {
                        fontSize: '0.8rem',
                        fontWeight: '300',
                        color: '#fff'
                    },
                    '& .MuiAlert-action': {
                        fontSize: '0.8rem',
                        fontWeight: '300',
                        color: '#fff'
                    },

                    '& .MuiAlert-icon': {
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#fff'
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
              select: {
                '&.MuiSelect-select': {
                  outline: 'none',
                  border: 'none',
                  textAlign:'left',
                },
              },
              root: {
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                background:'rgba(255,255,255,0.5)'
              },
              icon: {
                color: 'white',
              },
            },
          },
        
    },
});

export default theme;
