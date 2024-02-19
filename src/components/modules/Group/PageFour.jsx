import { useState } from "react";
import SelectInput from "../../common/SelectInput";
import FormWrapper from "../../common/StyledFormWrapper";
import TextInput from "../../common/TextInput";
import CommonContainer from "../../common/CommonContainer";

const PageFour = () => {

    const [dayOfWeek, setDayOfWeek] = useState();
    const [timeOfMeet, setTimeOfMeet] = useState();


    return (
        <CommonContainer>
        <FormWrapper
            buttonInputs={[{ text: "let's go", onClick: () => { console.log("clicked let's go") } }]}
            headingText='The Meeting'
        >
            <SelectInput label={"What Day Will You Meet"} value={dayOfWeek} setValue={setDayOfWeek} />
            <SelectInput label={"What Time Will You Meet"} value={timeOfMeet} setValue={setTimeOfMeet} />
            <TextInput placeholder="Ex. My Living Room, Our Church" label="Where Will You Meet" />
        </FormWrapper>
        </CommonContainer>
    )
}

export default PageFour;
