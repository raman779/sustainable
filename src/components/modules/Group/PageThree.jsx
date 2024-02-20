
import MultiChoiceCheckbox from "../../common/MiltiChoiceCheckbox"
import FormWrapper from "../../common/StyledFormWrapper"

const PageThree = ({nextPage}) => {
    return (

        <FormWrapper
            buttonInputs={[{ text: "continue", onClick: () => { nextPage()} }]}
            headingText='Build Your Group'
        >
            <MultiChoiceCheckbox label={"WHAT YEAR ARE YOU LEADING"} checkBoxLabels={["D1", "D2", "D3"]} />
            <MultiChoiceCheckbox label={"GENDERED OR CO-ED"} checkBoxLabels={["Co-Ed", "All Guys", "All Girls"]} />
        </FormWrapper>

    )
}

export default PageThree;
