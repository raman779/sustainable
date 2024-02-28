import React from 'react';
import { height, styled } from '@mui/system';
import { Container, Typography } from '@mui/material';
import CustomButton from './Button';

const StyledFormWrapper = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height:"100%"
});

const FormWrapper = ({ children ,subHeadingText = {text:null,onClick:() => {}},headingText = "Welcome",buttonInputs = [{text:"Yes",onclick:() => {}}]}) => {
  return (
    <StyledFormWrapper>
            <Typography variant='h3'>{headingText}</Typography>
            {subHeadingText.text && <Typography variant="body2" onClick={subHeadingText.onClick} style={{ cursor: 'pointer' ,paddingBottom:10}}>{subHeadingText.text}</Typography>}
                {children}
            {buttonInputs.map((button,index) => {
                return (
                    <CustomButton text = {button.text} onClick={button.onClick}  />
                )
            })
            }
    </StyledFormWrapper>
  );
};

export default FormWrapper;
