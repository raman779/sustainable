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
        "Home"
        </CommonContainer>
    );
}

export default Home;
