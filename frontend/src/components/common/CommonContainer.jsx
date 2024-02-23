import { styled } from "@mui/system"

const CommonBox = styled("div")(({ theme }) => ({
    padding:theme.spacing(4),
    margin:'auto',
    maxWidth:'22rem'
  }));


const CommonContainer = ({children , ...rest}) => {
    return(
        <CommonBox {...rest}>
            {children}
        </CommonBox>
    )
}

export default CommonContainer