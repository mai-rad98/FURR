import React from 'react'

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className='personal-info-container'>
    <input type="text" placeholder='Name' 
      value={formData.firstName}
      onChange={(e) => {
        setFormData({ ...formData, firstName: e.target.value });
      }}
      />
    <input type="text" placeholder='Lastname'  value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
        />
    <input type="text" placeholder='username' value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        />
</div>
  )
}

export default PersonalInfo;