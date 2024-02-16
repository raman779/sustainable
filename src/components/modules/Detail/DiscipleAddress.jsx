import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography, Grid, Box } from '@mui/material';
import TextInput from '../../common/TextInput';
import { styled } from '@mui/system';
import theme from '../../../styles/theme';



const StyledPaper = styled("div")(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',

    [theme.breakpoints.down('sm')]: {
        height: '100vh',
        padding: theme.spacing(8)
    },
}));

const DiscipleAddress = ({ setAddress}) => {
    return (
        <>
            <CssBaseline />
            <Container component="main" style={{ padding: 0 }} maxWidth="sm">
                <StyledPaper
                    elevation={3}
                >
                    <Typography variant="h3">Tell Us About You</Typography>

                    <form style={{ width: '100%', marginTop: '20px' }} onSubmit={()=>setAddress(true)}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextInput label="Where Are You Located ?" placeholder={"Zip Code"} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput placeholder={"City"} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput placeholder={"State"} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput placeholder={"Country"} />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"

                            style={{ marginTop: '20px' }}
                        >
                            Continue
                        </Button>
                    </form>
                </StyledPaper>
            </Container>
        </>
    );
};

export default DiscipleAddress;
