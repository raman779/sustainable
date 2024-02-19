import React from 'react'
import AccordionForm from './AccordianInvite';
import { Typography } from '@mui/material';

const InviteLeader = () => {
  return (
    <>
    <Typography variant='h3' >Who do you want to invite ?</Typography>
    <AccordionForm/>
    </>
  )
}

export default InviteLeader;