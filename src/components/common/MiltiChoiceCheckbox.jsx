import { Typography } from "@mui/material";
import CheckBoxInput from "./CheckBoxInput";
import { Box } from "@mui/system";
import theme from "../../styles/theme";

const MultiChoiceCheckbox = ({checkBoxLabels,label}) => {
    return(
        <Box pt={theme.spacing(2)}>
            <Typography textAlign={"left"} variant="body1">{label}</Typography>
            <CheckBoxInput checked={false} label={checkBoxLabels[0]}/>
            <CheckBoxInput checked={false} label={checkBoxLabels[1]}/>
            <CheckBoxInput checked={false} label={checkBoxLabels[2]}/>
        </Box>
    )
}

export default MultiChoiceCheckbox;