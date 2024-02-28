import { Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import useFetch from '../../../hooks/usefetch'
import CommonContainer from '../../common/CommonContainer'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteIcon from '@mui/icons-material/Delete';
import theme from '../../../styles/theme';
import { CssBaseline, Grid } from '@mui/material';
const Home = ({ setCurrentPage, setOrgId }) => {
    const [orgs, setOrgs] = React.useState([])
    const { fetchData } = useFetch()
    React.useEffect(() => {
        fetchOrgs()
    }, []);
    const fetchOrgs = async () => {
        const response = await fetchData({
            url: `/organization`,
            method: 'GET'
        });
        if (response.length !== 0) {
            setOrgs(response)
            console.log(response, "dfhkfggkhghgdgvkkjdfkndb");
            // setName(response[0].first_name)
        }
    }
    return (
        <>
         <CssBaseline />
            <Typography variant='h3' >All Organisations</Typography>
            <Box sx={{ overflowY: "auto", height: '50vh' }} mx={2} mt={2}>
                {orgs && [...orgs].map((org) => {
                    return (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} mt={0.5} >
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="h5">{org.name}</Typography>
                            </Box>
                            <Box>
                                <IconButton  >
                                    <PersonAddAlt1Icon
                                        fontSize="22"
                                        onClick={() => {
                                            setOrgId(org.id);
                                            setCurrentPage(2);
                                        }}
                                        style={{ fontSize: '2rem', color: theme.palette.error.main }}
                                    />

                                </IconButton>
                                <IconButton  >
                                    <DeleteIcon fontSize={"22"} style={{ fontSize: '2rem', color: theme.palette.error.main }} />

                                </IconButton>
                            </Box>

                        </Box>
                    )
                })}
            </Box >
        </>
        // </Box>
    )
}

export default Home