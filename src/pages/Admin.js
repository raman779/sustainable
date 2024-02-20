import { Box } from "@mui/system";
import { useState } from "react";
import { InviteLeader } from "../components/modules/Admin"

const Admin = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        console.log("ghggh")
        setCurrentPage((prevPage) => prevPage + 1);
    };



    return (

        <Box mt ={2} style={{
            maxWidth: "22rem",
            margin: "auto"
        }}>
            <InviteLeader />
        </Box>

    )
}

export default Admin;