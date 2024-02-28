import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../styles/theme';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import TextInput from './TextInput';

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

function AccordianForm({ buttonText, formDataList, setFormDataList }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
        setNameError('');
    };

    const handleAddMore = () => {
        if (!email.trim()) {
            setEmailError('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            return;
        }
        if (!name.trim()) {
            setNameError('Name is required');
            return;
        }

        setFormDataList([...formDataList, { email, name }]);
        setEmail('');
        setName('');
    };

    const validateEmail = (email) => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <div style={{maxHeight: '50vh', overflowY: 'auto', paddingRight: '8px' }}>
                {formDataList.map((formData, index) => (
                    <StyledAccordion key={index} TransitionProps={{ unmountOnExit: true }} style={{ marginTop: '8px' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography> {formData.email}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <span>Email : {formData.email}</span>
                                <span>Name : {formData.name}</span>
                            </div>
                        </AccordionDetails>
                    </StyledAccordion>
                ))}
                <div>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChange={handleChangeEmail}
                        autoComplete='off'
                        margin="normal"
                        error={!!emailError}
                        helperText={emailError}
                    />
                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChange={handleChangeName}
                        autoComplete='off'
                        error={!!nameError}
                        helperText={nameError}
                    />
                </div>
            </div>
            <IconButton onClick={handleAddMore} style={{ display: 'flex', justifyContent: 'left' }}>
                <AddIcon fontSize={"22"} style={{ fontSize: '2rem', color: theme.palette.error.main }} />
                <Typography color={theme.palette.error.main}>
                   {buttonText}
                </Typography>
            </IconButton>
        </>
    );
}

export default AccordianForm;
