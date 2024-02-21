import React from 'react';
import MultiChoiceCheckbox from "../../common/MiltiChoiceCheckbox";
import FormWrapper from "../../common/StyledFormWrapper";
import { leaderJourneyDetails } from "../../../constants";
import { Box } from "@mui/material";

import { Grid } from "@mui/material";

const DiscipleJourney = ({ nextPage }) => {
    return (
        <FormWrapper
            buttonInputs={[{ text: "continue", onClick: () => { nextPage() } }]}
            headingText='Tell Us About Journey'
        >
            <Grid container spacing={2} mt={1}>
                {leaderJourneyDetails.questions.map((value, index) => (
                    <React.Fragment key={index}>
                        {value.display === "multiple" ? (
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    {value.questions.map((subValue, subIndex) => (
                                        <Grid key={subIndex} item xs={6}>
                                            <MultiChoiceCheckbox label={subValue.text} checkBoxLabels={subValue.choices} multi={true}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item xs={12}>
                                <MultiChoiceCheckbox label={value.text} checkBoxLabels={value.choices} />
                            </Grid>
                        )}
                    </React.Fragment>
                ))}
            </Grid>
        </FormWrapper>
    );
};

export default DiscipleJourney;
