import { Box } from "@mui/system";
import { useState } from "react";
import { InviteLeader } from "../components/modules/Admin"
import CommonContainer from "../components/common/CommonContainer";

const Admin = () => {
    const [formDataList, setFormDataList] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        console.log("ghggh")
        setCurrentPage((prevPage) => prevPage + 1);
    };



    return (

        <CommonContainer>
            <InviteLeader buttonText={'Add More Leader'} onSubmit={()=>{}} formDataList={formDataList} setFormDataList={setFormDataList}/>
        </CommonContainer>
        

    )
}

export default Admin;