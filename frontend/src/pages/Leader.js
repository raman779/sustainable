import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import DiscipleAddress from '../components/modules/Detail/DiscipleAddress';
import DiscipleJourney from '../components/modules/Detail/DiscipleJourney';
import CommonContainer from '../components/common/CommonContainer';

const Auth = () => {
    const theme = useTheme()
    const [address, setAddress] = useState(false);
    return (
        <CommonContainer>
                {address ? <DiscipleJourney setAddress={setAddress}/> : <DiscipleAddress  setAddress={setAddress}/>}
        </CommonContainer>
    )
}

export default Auth