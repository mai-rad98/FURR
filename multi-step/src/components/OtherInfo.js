import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import { FormControlLabel, TextField,Checkbox,} from '@material-ui/core'

function OtherInfo({ formData, setFormData }) {
  return (
    <div className='other-info-container'>
        <TextField type="text" placeholder='nationality'  fullWidth required  value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }} 
        />
        
        <TextField type="text" placeholder='other'  fullWidth required  value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
        />
        
                    <FormControl fullWidth required >

<InputLabel variant="standard" htmlFor="uncontrolled-native">
  Country
</InputLabel>
<NativeSelect  
  defaultValue={30}
  inputProps={{
    name: 'nationality',
    id: 'uncontrolled-native',
  }}
>
  <option value={10}>Botswana</option>
  <option value={20}>South africa</option>
  <option value={30}>botswana</option>
</NativeSelect>
</FormControl>
<FormControlLabel
                    name='remember'
                    control={
                        <Checkbox
                        color='primary'
                        />
                    }
                    label='Sign me up'
                    />
       
    </div>
  )
}

export default OtherInfo;