import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';

const CustomButton = ({ onClick = () => { }, text, variant = "contained", color="secondary" ,disabled=false}) => {
    const theme = useTheme()
    return (
        <Button style={{marginBlock:theme.spacing(2)}}  variant={variant} color={color} onClick={onClick} disabled={disabled}>
            {text}
        </Button>
    );
};

export default CustomButton;
