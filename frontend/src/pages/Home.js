import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Box, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../styles/theme';
import AddIcon from '@mui/icons-material/Add';
import CommonContainer from '../components/common/CommonContainer';

function Home() {
    const [formDataList, setFormDataList] = useState([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleAddMore = () => {
        if (email && name) {
            setFormDataList([...formDataList, { email, name }]);
            setEmail('');
            setName('');
        }
    };

    return (
       <CommonContainer> 
            {formDataList.map((formData, index) => (
                <Accordion key={index} TransitionProps={{ unmountOnExit: true }} style={{ marginTop: '20px' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography> {formData.email}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <TextField
                                placeholder="Email"
                                value={formData.email}
                                autoComplete='off'
                                margin="normal"
                                disabled
                            />
                            <TextField
                                placeholder="Name"
                                value={formData.name}
                                autoComplete='off'
                                margin="normal"
                                disabled
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
            <div>
                <TextField
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                    autoComplete='off'
                    margin="normal"
                />
                <TextField
                    placeholder="Name"
                    value={name}
                    onChange={handleChangeName}
                    autoComplete='off'
                    margin="normal"
                />
                <IconButton onClick={handleAddMore} style={{ display: 'flex', justifyContent: 'left', marginLeft: "5px" }}>
                    <AddIcon fontSize={"22"} style={{ fontSize: '2rem', color: theme.palette.error.main }} />
                    <Typography color={theme.palette.error.main} style={{ fontSize: '1.5rem', }}>
                        Add More leaders
                    </Typography>
                </IconButton>

            </div>
        </CommonContainer>
    );
}

export default Home;
