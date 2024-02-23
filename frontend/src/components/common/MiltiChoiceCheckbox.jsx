import React from 'react';
import { Typography } from "@mui/material";
import CheckBoxInput from "./CheckBoxInput";
import { Box } from "@mui/system";
import theme from "../../styles/theme";

const MultiChoiceCheckbox = ({ checkBoxLabels, label, multi = false }) => {
    return (
        <>
            <Typography textAlign={"left"} variant="body2">{label}</Typography>
            <Box display="flex" flexDirection={multi && checkBoxLabels.length===4 ? "row" : "column"} flexWrap="wrap">
                {checkBoxLabels.map((label, index) => (
                    <Box key={index} width={multi && checkBoxLabels.length===4  ? "50%" : "100%"} maxWidth={multi ? "50%" : "100%"} >
                        <CheckBoxInput checked={false} label={label.text || label} />
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default MultiChoiceCheckbox;
