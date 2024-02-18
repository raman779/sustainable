import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Login from '../components/modules/Auth/Login';
import Register from '../components/modules/Auth/Register';
import { Box } from '@mui/material'

const Auth = () => {
    const theme = useTheme()
    const [login, setLogin] = useState(false);
    return (
        <div >
            <Box style={{
                maxWidth: "22rem",
                margin: "auto"
            }}>
                {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
            </Box>
        </div>
    )
}

export default Auth