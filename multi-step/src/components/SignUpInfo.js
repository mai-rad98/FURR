import React from 'react'
import {TextField,FormControlLabel,Checkbox} from '@material-ui/core'



function SignUpInfo({formData, setFormData}) {


 return(

                    
       <div className='sign-up-container'>
  


        <form>
        <TextField type="text" placeholder='email' fullWidth required  value={formData.email}
         onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        } 
        />
        <TextField type="text" placeholder='Password'  name='password'  fullWidth required 
                
         value={formData.password}
         onChange={(event) =>
           setFormData({ ...formData, password: event.target.value })
         }
         />
        < TextField type="text" placeholder='Confirm Password' fullWidth required  value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
        />
         <FormControlLabel
                    name='remember'
                    control={
                        <Checkbox
                        color='primary'
                        />
                    }
                    label='Remember me'
                    />
        <div></div>
        
         </form>
         </div>
    
  )
}

export default SignUpInfo;