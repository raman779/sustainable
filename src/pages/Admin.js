import { Box } from "@mui/system";
import { useState } from "react";
import { InviteLeader } from "../components/modules/Admin"
import CommonContainer from "../components/common/CommonContainer";

const Admin = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        console.log("ghggh")
        setCurrentPage((prevPage) => prevPage + 1);
    };



    return (

        <CommonContainer>
            <InviteLeader />
        </CommonContainer>
        

    )
}

export default Admin;