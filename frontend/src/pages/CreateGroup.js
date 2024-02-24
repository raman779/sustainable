import { Box } from "@mui/system";
import { PageOne ,PageTwo,PageThree,PageFour} from "../components/modules/Group"
import { useState } from "react";
import CommonContainer from "../components/common/CommonContainer";

const CreateGroup = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };



    return(
        <CommonContainer>
            {currentPage === 1 && <PageOne nextPage={nextPage} />}
            {currentPage === 2 && <PageTwo nextPage={nextPage}  />}
            {currentPage === 3 && <PageThree nextPage={nextPage} />}
            {currentPage === 4 && <PageFour />}
        </CommonContainer>
    )
}

export default CreateGroup;