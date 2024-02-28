import { Box } from '@mui/system';


const RowBox = ({children}) => {
    return(
        <Box display={'flex'} justifyContent={"space-evenly"} alignItems={'flex-start'}>
            {children}
        </Box>
    )
}

export default RowBox