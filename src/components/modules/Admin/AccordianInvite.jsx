import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Button, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../../styles/theme';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
// import { Accordion } from '@mui/material';

const StyledAccordion = styled(Accordion)({
  backgroundColor: theme.palette.error.main,
  borderRadius: '12px',
  '& .MuiTypography-root': {
    color: theme.palette.primary.main,
    fontSize: '1.4rem'
  },
  '&:first-child': {
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  }
});

function AccordianForm() {
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
        <>
            <div style={{ padding: '20px',  maxHeight: '60vh', overflowX: 'scroll' }}>
                {formDataList.map((formData, index) => (
                    <StyledAccordion key={index} TransitionProps={{ unmountOnExit: true }} style={{ marginTop: '20px' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography> {formData.email}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                               <span>
                               Email : {formData.email}
                               </span>
                               <span>
                               Name : {formData.name}
                               </span>
                                
                            </div>
                        </AccordionDetails>
                    </StyledAccordion>
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

                </div>

            </div>
            <IconButton onClick={handleAddMore} style={{ display: 'flex', justifyContent: 'left', marginLeft: "5px" }}>
                <AddIcon fontSize={"22"} style={{ fontSize: '2rem', color: theme.palette.error.main }} />
                <Typography color={theme.palette.error.main} style={{ fontSize: '1.5rem', }}>
                    Add More leaders
                </Typography>
            </IconButton>
        </>
    );
}

export default AccordianForm;
