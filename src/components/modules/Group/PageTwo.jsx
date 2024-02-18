import { Box } from "@mui/system"
import FormWrapper from "../../common/StyledFormWrapper"
import RowBox from "../../common/RowBox"
import CheckBoxInput from "../../common/CheckBoxInput"
import SelectInput from "../../common/SelectInput"
import { useState } from "react"
import CommonContainer from "../../common/CommonContainer"

const PageTwo = ({nextPage}) => {

    const [checked, setChecked] = useState(false)
    const [organization, setOrganization] = useState()




    return (
        <CommonContainer>
        <FormWrapper
            buttonInputs={[{ text: "continue", onClick: () => { nextPage() } }]}
            headingText='Are You With an Organization?'
        >
            <Box display={'flex'} flexDirection={"column"} justifyContent={"space-between"} minHeight={300}>
                <RowBox display={'flex'} justifyContent={"space-evenly"}>
                    <CheckBoxInput onChange={() => { setChecked(prev => !prev) }} checked={checked} label={"Yes"} />
                    <CheckBoxInput checked={false} label={"No"} />
                </RowBox>
                {checked && <SelectInput label={"Pick Your Organization"} helperText={"If you don’t see your organization in the drop down,email us and we’ll help you get set-up."} value={organization} setValue={setOrganization} />}
            </Box>
        </FormWrapper>
        </CommonContainer>
    )
}

export default PageTwo;
