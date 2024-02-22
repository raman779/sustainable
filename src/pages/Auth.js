import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Login from '../components/modules/Auth/Login';
import Register from '../components/modules/Auth/Register';
import { Box } from '@mui/material'
import CommonContainer from '../components/common/CommonContainer';

const Auth = () => {
    const theme = useTheme()
    const [login, setLogin] = useState(false);

    


    return (
        <CommonContainer>
                {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
        </CommonContainer>
    )
}

export default Auth