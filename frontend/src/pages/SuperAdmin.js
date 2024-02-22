import { Box } from "@mui/system";
import { useState } from "react";
import { InviteLeader } from "../components/modules/Admin"
import CommonContainer from "../components/common/CommonContainer";
import { CssBaseline, Grid } from '@mui/material';
import TextInput from '../components/common/TextInput';
import FormWrapper from '../components/common/StyledFormWrapper';
import useFetch from '../hooks/usefetch';
import { useTheme } from '@mui/material/styles';
// import InviteLeader from "../components/modules/Admin";
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
                setCurrentPage(1)


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
        <CommonContainer>
            <>
                <CssBaseline />
                {currentPage === 0 ? <FormWrapper

                    buttonInputs={[{
                        text: "Create", onClick: () => {

                            createNewOrg()
                        }
                    }]}
                    headingText='Add New Organisation'
                >
                    <Grid container spacing={2} mt={2} mb={2}>
                        <Grid item xs={12}>
                            <TextInput
                                value={orgName}
                                onChange={(e) => setOrgName(e.target.value)}
                                label="Organisation Name"

                            />
                        </Grid>
    
                    </Grid>
                </FormWrapper> :

                    <InviteLeader buttonText={'Add More Admins'} onSubmit={onAddAdmin} formDataList={formDataList} setFormDataList={setFormDataList} />}
            </>
        </CommonContainer>


    )
}

export default SuperAdmin;