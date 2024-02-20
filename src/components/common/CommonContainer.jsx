import { styled } from "@mui/system"

const CommonBox = styled("div")(({ theme }) => ({
    padding:theme.spacing(4)
  }));


const CommonContainer = ({children , ...rest}) => {
    return(
        <CommonBox {...rest}>
            {children}
        </CommonBox>
    )
}

export default CommonContainer