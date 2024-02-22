import React from 'react'
import AccordionForm from './AccordianInvite';
import { Typography } from '@mui/material';
import CustomButton from '../../common/Button';

const InviteLeader = ({buttonText, onSubmit,formDataList, setFormDataList}) => {
  return (
    <>
    <Typography variant='h3' >Who do you want to invite ?</Typography>
    <AccordionForm buttonText={buttonText}  formDataList={formDataList} setFormDataList={setFormDataList} />
    <CustomButton text = {'Continue'} onClick={onSubmit} />
    </>
  )
}

export default InviteLeader;