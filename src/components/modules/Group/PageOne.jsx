import { CssBaseline } from "@mui/material"
import CommonContainer from "../../common/CommonContainer"
import FormWrapper from "../../common/StyledFormWrapper"

const PageOne = ({nextPage}) => {


    return (
        <>
        <CssBaseline />
        <CommonContainer>
        <FormWrapper
            buttonInputs={[{ text: "now", onClick: () => { nextPage() } }, { text: "later", onClick: () => { nextPage() } }]}
            headingText='Do You Want to Build Your Groups Now?'
        >
            <div style={{ height: 300 }} />
        </FormWrapper>
        </CommonContainer>
        </>
    )
}

export default PageOne;
