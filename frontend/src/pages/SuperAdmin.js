import { Box } from "@mui/system";
import { useState } from "react";
import { InviteLeader } from "../components/modules/Admin"
import CommonContainer from "../components/common/CommonContainer";
import { CssBaseline, Grid } from '@mui/material';
import TextInput from '../components/common/TextInput';
import FormWrapper from '../components/common/StyledFormWrapper';
import useFetch from '../hooks/usefetch';
import { useTheme } from '@mui/material/styles';
import BottomBar from "../components/common/BottomBar";
import styled from "@emotion/styled";



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

    const onAddAdmin = async (users) => {
        console.log('dhj')

    }


    return (
        <Container>
            <>
                <CssBaseline />
                {currentPage === 0 && <Box>super admin home</Box>}
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

                {currentPage === 2 && <InviteLeader buttonText={'Add More Admins'} onSubmit={onAddAdmin} formDataList={formDataList} setFormDataList={setFormDataList} />}
            </>
            <BottomBar buttonInputs = {[
                {text:"Home",onClick:() => {console.log("Home")}},
                {text:"Add Organization",onClick:() => {setCurrentPage(1)}},
                {text:"Profile",onClick:() => {console.log("Profile")}}
                ]}/>
        </Container>


    )
}

export default SuperAdmin;