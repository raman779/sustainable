import React from 'react'
import AccordionForm from '../../common/AccordianInvite';
import { Typography, Box } from '@mui/material';
import CustomButton from '../../common/Button';


const InviteLeader = (props) => {
  const {buttonText, onSubmit,formDataList, setFormDataList} = props
  if (props.orgId){
    console.log(props.orgId,"ugyfguyuygugyiu")
  }
  return (
    <>
      <Typography variant='h3' >Who do you want to invite ?</Typography>
      <Box mx={1.5} mt={1}>
      <AccordionForm buttonText={buttonText}  formDataList={formDataList} setFormDataList={setFormDataList} />
      <CustomButton text = {'Continue'} onClick={onSubmit} />
    </Box>
    
    </>
  )
}

export default InviteLeader;