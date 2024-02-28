import { Box } from "@mui/material";
import React, { useState } from "react";
import { InviteLeader } from "../components/modules/Admin"
import CommonContainer from "../components/common/CommonContainer";
import { CssBaseline, Grid } from '@mui/material';
import TextInput from '../components/common/TextInput';
import FormWrapper from '../components/common/StyledFormWrapper';
import useFetch from '../hooks/usefetch';
import { useTheme } from '@mui/material/styles';
import BottomBar from "../components/common/BottomBar";
import styled from "@emotion/styled";
import Home from "../components/modules/SuperAdmin/Home";
import { logOut } from "../utils";


const Container = styled("div")(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
}));

const SuperAdmin = () => {
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

    const createNewOrg = async () => {
        try {

            const response = await fetchData({
                url: "/organization",
                data: {
                    "name": orgName,
                    "status": "ACTIVE"
                },
                method: 'POST'
            });
            if (response) {
                console.log("successfully created new org")
                setCurrentPage(2)
            } else {
                console.error("Authentication token not found in response.");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    const onAddAdmin = async () => {
        console.log('dhj')
        setCurrentPage(0)

    }
    React.useEffect(() => {
        console.log(orgId, formDataList, 'rjyhrtfgfdkjbdfkljgvf')
        if (orgId && formDataList.length!== 0) {
         inviteAdmin(formDataList[formDataList.length-1])
        }
    }, [formDataList])

    const inviteAdmin = async (user) => {
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
                {currentPage === 1 && <FormWrapper
                    buttonInputs={[{
                        text: "Create", onClick: () => {
                            createNewOrg()
                        }
                    }]}
                    headingText='Add New Organisation'
                >
                    <TextInput
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        label="Organisation Name"
                    />
                </FormWrapper>}
                {currentPage === 2 && <InviteLeader buttonText={'Add More Admins'} onSubmit={onAddAdmin} formDataList={formDataList} setFormDataList={setFormDataList} orgId={orgId} />}
            </CommonContainer>
            <BottomBar buttonInputs={[
                { text: "Home", onClick: () => { setCurrentPage(0) } },
                { text: "Add Organisation", onClick: () => { setCurrentPage(1) } },
                { text: "Profile", onClick: () => {  } }
            ]} />
        </Container>
    )
}

export default SuperAdmin;