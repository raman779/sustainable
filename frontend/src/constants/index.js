export const leaderJourneyDetails = {
    questions: [
        {
            display: 'single',
            "text": "I've ATTENDED",
            "answer": "attended",
            "type": "radio",
            "choices": [
                {
                    "text": "Live Workshop",
                    "value": "attended_live_workshop"
                },
                {
                    "text": "Virtual Workshop",
                    "value": "attended_virtual_workshop"
                },
                {
                    "text": "None of the Above",
                    "value": "attended_no_of_the_above"
                }
            ]
        },
        {
            display: 'single',
            "text": "I've READ",
            "answer": "read",
            "type": "radio",
            "choices": [
                {
                    "text": "How to Make Disciples",
                    "value": "read_how_to_make_disciples"
                },
                {
                    "text": "Well Made Well Done",
                    "value": "read_well_made_well_done"
                },
                {
                    "text": "None of the Above",
                    "value": "read_none_of_the_above"
                }
            ]
        },
        {
            display: "multiple",
            questions: [
                {
                    "text": "I've FINISHED",
                    "answer": "finished",
                    "type": "checkbox",
                    "choices": [
                        {
                            "text": "D1",
                            "value": "finished_D1"
                        },
                        {
                            "text": "D2",
                            "value": "finished_D2"
                        },
                        {
                            "text": "D3",
                            "value": "finished_D3"
                        },
                        {
                            "text": "D4",
                            "value": "finished_D4"
                        }
                    ]
                },
                {
                    "text": "I've LEAD",
                    "answer": "lead",
                    "type": "checkbox",
                    "choices": [
                        {
                            "text": "D1",
                            "value": "lead_D1"
                        },
                        {
                            "text": "D2",
                            "value": "lead_D2"
                        },
                        {
                            "text": "D3",
                            "value": "lead_D3"
                        },
                        {
                            "text": "D4",
                            "value": "lead_D4"
                        }
                    ]
                }
            ]
        },
        {
            display: "multiple",
            questions: [
                {
                    "text": "I've been coached?",
                    "answer": "coached",
                    "type": "radio",
                    "choices": [
                        {
                            "text": "Yes",
                            "value": "coached_yes"
                        },
                        {
                            "text": "No",
                            "value": "coached_no"
                        }
                    ]
                },
                {
                    "text": "I want coaching?",
                    "answer": "coaching",
                    "type": "radio",
                    "choices": [
                        {
                            "text": "Yes",
                            "value": "coaching_yes"
                        },
                        {
                            "text": "No",
                            "value": "coaching_no"
                        }
                    ]
                }
            ]
        }
    ]
};
