import React, { useState } from 'react';
import MultiChoiceCheckbox from '../../common/MiltiChoiceCheckbox';
import FormWrapper from "../../common/StyledFormWrapper";
import { leaderJourneyDetails } from "../../../constants";
import { Grid } from "@mui/material";
import { styled, Box } from "@mui/system";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/usefetch';
const ContainerBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        height: '50vh',
        overflowY: "auto"
    },
}));

const DiscipleJourney = ({ nextPage }) => {
    const { loading, fetchData } = useFetch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [submitData, setSubmitData] = useState({
        "attended_live_workshop": false,
        "attended_virtual_workshop": false,
        "attended_no_of_the_above": false,
        "read_how_to_make_disciples": false,
        "read_well_made_well_done": false,
        "read_none_of_the_above": false,
        "coached": false,
        "coaching": false,
        "finished_D1": false,
        "finished_D2": false,
        "finished_D3": false,
        "finished_N/A": false,
        "lead_D1": false,
        "lead_D2": false,
        "lead_D3": false,
        "lead_N/A": false
    })
    const handleCheckboxChange = (question, choice, isChecked) => {
        console.log(choice, isChecked, "FDhhhhhhj")
        setFormData(prevData => ({
            ...prevData,
            [question.answer]: {
                ...(prevData[question.answer] || {}),
                [choice.value]: isChecked
            }
        }));
        setSubmitData(prevData => ({
            ...prevData,
            [choice]: isChecked
        }));

    };
    const submitFormdata=async( experienceData)=>{
        const response = await fetchData({
            url: "/experience",
            data: experienceData,
            method: 'POST',
            isHeader:true
        });
        console.log(response)
        if (response.status === "success") {
            navigate("/creategroup")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Transform formData to match API body structure
        const transformedData = Object.keys(formData).reduce((acc, key) => {
            acc[key] = Object.keys(formData[key]).filter(choiceKey => formData[key][choiceKey]);
            return acc;
        }, {});
        console.log(submitData, "FDhhhhhhj");
        submitFormdata(submitData)
        // navigate('/leader')
        // nextPage(); 
    };

    return (
        <FormWrapper
            buttonInputs={[{ text: "continue", onClick: handleSubmit }]}
            headingText='Tell Us About Journey'
        >
            <ContainerBox my={2}>
                <Grid container spacing={2} mt={1}>
                    {leaderJourneyDetails.questions.map((value, index) => (
                        <React.Fragment key={index}>
                            {value.display === "multiple" ? (
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        {value.questions.map((subValue, subIndex) => (
                                            <Grid key={subIndex} item xs={6}>
                                                <MultiChoiceCheckbox
                                                    label={subValue.text}
                                                    checkBoxLabels={subValue.choices}
                                                    multi={true}
                                                    onChange={(choice, isChecked) => handleCheckboxChange(subValue, choice, isChecked)}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            ) : (
                                <Grid item xs={12}>
                                    <MultiChoiceCheckbox
                                        label={value.text}
                                        checkBoxLabels={value.choices}
                                        onChange={(choice, isChecked) => handleCheckboxChange(value, choice, isChecked)}
                                    />
                                </Grid>
                            )}
                        </React.Fragment>
                    ))}
                </Grid>
            </ContainerBox>
        </FormWrapper>
    );
};

export default DiscipleJourney;
