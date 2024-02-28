import { Box } from "@mui/system"
import FormWrapper from "../../common/StyledFormWrapper"
import RowBox from "../../common/RowBox"
import CheckBoxInput from "../../common/CheckBoxInput"
import SelectInput from "../../common/SelectInput"
import { useState } from "react"

const PageTwo = ({nextPage}) => {

    const [checked, setChecked] = useState(false)
    const [organization, setOrganization] = useState()




    return (

        <FormWrapper
            buttonInputs={[{ text: "continue", onClick: () => { nextPage() } }]}
            headingText='Are You With an Organisation?'
        >
            <Box display={'flex'} flexDirection={"column"} justifyContent={"space-between"} minHeight={300} mt={1}>
                <RowBox display={'flex'} justifyContent={"space-evenly"}>
                    <CheckBoxInput onChange={() => { setChecked(prev => !prev) }} checked={checked} label={"Yes"} />
                    <CheckBoxInput checked={false} label={"No"} />
                </RowBox>
                {checked && <SelectInput label={"Pick Your Organisation"} helperText={"If you don’t see your organisation in the drop down,email us and we’ll help you get set-up."} value={organization} setValue={setOrganization} />}
            </Box>
        </FormWrapper>

    )
}

export default PageTwo;
