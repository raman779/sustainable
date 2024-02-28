import { Box } from "@mui/system";
import React, { useState } from "react";
import { InviteLeader , Home} from "../components/modules/Admin"
import CommonContainer from "../components/common/CommonContainer";
import { CssBaseline, Grid } from '@mui/material';
import TextInput from '../components/common/TextInput';
import FormWrapper from '../components/common/StyledFormWrapper';
import useFetch from '../hooks/usefetch';
import { useTheme } from '@mui/material/styles';
import BottomBar from "../components/common/BottomBar";
import styled from "@emotion/styled";

import { logOut } from "../utils";


const Container = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
}));

const Admin = () => {
    const theme = useTheme()
    const { loading, error, fetchData } = useFetch();
    const [formDataList, setFormDataList] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [orgName, setOrgName] = useState()
    const [orgId, setOrgId] = useState()
    const nextPage = () => {
        console.log("ghggh")
        setCurrentPage((prevPage) => prevPage + 1);
    };


    const onAddAdmin = async () => {
        console.log('dhj')
        setCurrentPage(0)

    }
    React.useEffect(() => {
        console.log(orgId, formDataList, 'rjyhrtfgfdkjbdfkljgvf')
        if (orgId && formDataList.length!== 0) {
         inviteLeader(formDataList[formDataList.length-1])
        }
    }, [formDataList])

    const inviteLeader = async (user) => {
        try {
            const nameParts = user.name?.split(' ');
            const first_name = nameParts[0];
            const last_name = nameParts[1] || ""
            const response = await fetchData({
                url: "/users",
                data: {
                    first_name,
                    last_name,
                    email: user.email,
                    organization_ids :[orgId]
                },
                method: 'POST',
                isHeader :true
            });
            if (response) {
                console.log("successfully created new org")
                // setCurrentPage(2)
            } else {
                console.error("Authentication token not found in response.");
            }
        } catch (err) {
            console.log(err)
        }


    }

    return (
        <Container>
            <CommonContainer>
                <CssBaseline />
                {currentPage === 0 && <Home setCurrentPage={setCurrentPage} setOrgId={setOrgId} />}
                {currentPage === 1 && 
               <>gfuytiiihik</>
               }
                {currentPage === 2 && <InviteLeader buttonText={'Add More Leader'} onSubmit={onAddAdmin} formDataList={formDataList} setFormDataList={setFormDataList} orgId={orgId} />}
            </CommonContainer>
            <BottomBar buttonInputs={[
                { text: "Home", onClick: () => { setCurrentPage(0) } },
                { text: "Add Leaders", onClick: () => { setCurrentPage(2) } },
                { text: "Profile", onClick: () => { logOut() } }
            ]} />
        </Container>
    )
}

export default Admin;