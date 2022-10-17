import React from 'react'
import { TextField,FormControl,InputLabel,NativeSelect,FormControlLabel,Checkbox} from '@material-ui/core'

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className='personal-info-container'>
    <TextField type="text" placeholder='Name' fullWidth required  
      value={formData.firstName}
      onChange={(e) => {
        setFormData({ ...formData, firstName: e.target.value });
      }}
      />
    <TextField type="text" placeholder='Lastname' fullWidth required   value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
        />
    <TextField type="text" placeholder='username' fullWidth required  value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        />

<FormControl fullWidth required >

<InputLabel variant="standard" htmlFor="uncontrolled-native">
Gender
</InputLabel>
<NativeSelect  
  defaultValue={30}
  inputProps={{
    name: 'nationality',
    id: 'uncontrolled-native',
  }}
>
  <option value={10}>Female</option>
  <option value={20}>Male</option>
  <option value={30}>Binary</option>
</NativeSelect>
</FormControl>
 
<FormControlLabel
                    name='declare'
                    control={
                        <Checkbox
                        color='primary'
                        />
                    }
                    label='not a Robot'
                    />


</div>
  )
}

export default PersonalInfo;