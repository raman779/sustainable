import { CssBaseline } from "@mui/material"

import FormWrapper from "../../common/StyledFormWrapper"

const PageOne = ({nextPage}) => {


    return (
        <>
        <CssBaseline />

        <FormWrapper
            buttonInputs={[{ text: "now", onClick: () => { nextPage() } }, { text: "later", onClick: () => { nextPage() } }]}
            headingText='Do You Want to Build Your Groups Now?'
        >
            <div style={{ height: 300 }} />
        </FormWrapper>

        </>
    )
}

export default PageOne;
