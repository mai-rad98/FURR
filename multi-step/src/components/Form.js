import React from 'react'


import { useState } from 'react';
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

import {Button, Box,Grid,Paper} from '@material-ui/core'




function Form() {

  const paperStyle={padding :20,height:'70vh',width:300, margin:"20px auto"} 
  



const [page, setPage]=useState(0);
const [formData,SetFormData] = useState({
      email:"",
      password:"",
      confirmPassword:"",
      firstName :"",
      lastName :"",
      userName :"",
      nationality:"",
      other:"",
      remember:false


});

const FormTitles = [" Sign Up","Personal Info","Other"]

const PageDisplay = () => {
     if(page === 0){
    return <SignUpInfo formData={formData} setFormData={SetFormData}/>;
     } else if (page === 1){
        return <PersonalInfo formData={formData} setFormData={SetFormData}/>
     } else {
        return <OtherInfo formData={formData} setFormData={SetFormData}/>
     }
};

  return (
    <Grid>
      <Paper elevation={14} style={paperStyle}>
                    

<div className='form'>
    {/* <h1>maitumelo is doing it</h1> */}
    <div className='progressbar'></div>
    <div className='form-container'></div>
    <div className='header'>
        <h1> {FormTitles[page]}</h1>
    </div>
    
    <div className='body'>{PageDisplay()}</div>

    <div className='footer'></div>
 
    <Grid align='center'>
      <Box sx={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <Button type='submit' color='primary' variant='contained' 
     disabled={page === 0}
     onClick={() =>{
         setPage((currPage) => currPage - 1 )
     }}
    
    >Prev</Button>
    <Button type='submit' color='primary' variant='contained' 
    onClick={() => {
      if (page === FormTitles.length - 1) {
        alert("FORM SUBMITTED");
        console.log(formData);
      } else {
        setPage((currPage) => currPage + 1);
      }
    }} >
      
      {page === FormTitles.length - 1 ? "Submit" : "Next"} </Button>
      </Box>
      </Grid>
 
</div>

</Paper>
  
            
    </Grid>
  )
}

export default Form;