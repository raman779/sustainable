import { CssBaseline } from "@mui/material"
import {  useNavigate } from 'react-router-dom';
import FormWrapper from "../../common/StyledFormWrapper"

const PageOne = ({nextPage}) => {

    const navigate= useNavigate()
    return (
        <>
        <CssBaseline />

        <FormWrapper
            buttonInputs={[{ text: "now", onClick: () => { nextPage() } }, { text: "later", onClick: () => { navigate('/leader') } }]}
            headingText='Do You Want to Build Your Groups Now?'
        >
            <div style={{ height: 300 }} />
        </FormWrapper>

        </>
    )
}

export default PageOne;
