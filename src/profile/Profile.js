
import React from 'react'

const Profile = ({list,children}) => 
    {
    return (
        <div>
      <button onClick={() => alert(list.FullName)}>
     click 
   </button> 

<h1>{list.Profession}</h1>
{children}
        </div>
    )
}

export default Profile
