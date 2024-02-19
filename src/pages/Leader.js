import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material'
import DiscipleAddress from '../components/modules/Detail/DiscipleAddress';
import DiscipleJourney from '../components/modules/Detail/DiscipleJourney';

const Auth = () => {
    const theme = useTheme()
    const [address, setAddress] = useState(false);
    return (
        <div >
            <Box style={{
                maxWidth: "22rem",
                margin: "auto"
            }}>
                {address ? <DiscipleJourney setAddress={setAddress}/> : <DiscipleAddress  setAddress={setAddress}/>}

            </Box>
        </div>
    )
}

export default Auth