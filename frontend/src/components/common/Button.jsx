import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';

const CustomButton = ({ onClick = () => { }, text, variant = "contained", color="secondary" }) => {
    const theme = useTheme()
    return (
        <Button style={{marginBlock:theme.spacing(2)}} fullWidth variant={variant} color={color} onClick={onClick}>
            {text}
        </Button>
    );
};

export default CustomButton;
