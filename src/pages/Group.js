import { Box } from "@mui/system";
import { PageOne ,PageTwo,PageThree,PageFour} from "../components/modules/Group"
import { useState } from "react";

const Group = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        console.log("ghggh")
        setCurrentPage((prevPage) => prevPage + 1);
    };



    return(
        <Box style={{
            maxWidth: "22rem",
            margin: "auto"
        }} mt={2}> 
            {currentPage === 1 && <PageOne nextPage={nextPage} />}
            {currentPage === 2 && <PageTwo nextPage={nextPage}  />}
            {currentPage === 3 && <PageThree nextPage={nextPage} />}
            {currentPage === 4 && <PageFour />}
        </Box>
    )
}

export default Group;