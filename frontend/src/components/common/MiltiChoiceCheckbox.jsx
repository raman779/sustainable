// MultiChoiceCheckbox.jsx
import React from 'react';
import { Typography } from "@mui/material";
import CheckBoxInput from "./CheckBoxInput";
import { Box } from "@mui/system";

const MultiChoiceCheckbox = ({ checkBoxLabels, label, multi = false, onChange }) => {
    console.log(label,"fdghdfhjrfj2222222",checkBoxLabels)
    return (
        <>
            <Typography textAlign={"left"} variant="body2">{label}</Typography>
            <Box display="flex" flexDirection={multi && checkBoxLabels.length === 4 ? "row" : "column"} flexWrap="wrap">
                {checkBoxLabels.map((item, index) => (
                    <Box key={index} width={multi && checkBoxLabels.length === 4 ? "50%" : "100%"} maxWidth={multi ? "50%" : "100%"}>
                        <CheckBoxInput
                            checked={item.isChecked}
                            label={item.text || item}
                            onChange={(isChecked) => onChange(item.value, isChecked)}
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default MultiChoiceCheckbox;
