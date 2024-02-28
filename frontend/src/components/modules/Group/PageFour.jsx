import { useState } from "react";
import SelectInput from "../../common/SelectInput";
import FormWrapper from "../../common/StyledFormWrapper";
import TextInput from "../../common/TextInput";


const PageFour = () => {

    const [dayOfWeek, setDayOfWeek] = useState(0);
    const [timeOfMeet, setTimeOfMeet] = useState(0);


    return (
        <FormWrapper
            buttonInputs={[{ text: "let's go", onClick: () => { console.log("clicked let's go") } }]}
            headingText='The Meeting'
        >
            <SelectInput placeholder="Select a Day of the Week" label={"What Day Will You Meet"} value={dayOfWeek} setValue={setDayOfWeek} />
            <SelectInput label={"What Time Will You Meet"} placeholder="Select a Time of Day" value={timeOfMeet} setValue={setTimeOfMeet} />
            <TextInput placeholder="Ex. My Living Room, Our Church" label="Where Will You Meet" />
        </FormWrapper>

    )
}

export default PageFour;
