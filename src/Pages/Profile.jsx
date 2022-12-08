import React from 'react';
import {getItem} from '../Services/LocalStorege'

const Profile = (props) => {
    const user = getItem('usuario')

    const toProfileEdit = () => {
        const {history: {push}} = props;
        push('/profile/edit')   
    }
  return (
    <div>
        <p>{` Name: ${user.name}`}</p>
        <p>{` CPF: ${user.cpf}`}</p>
        <p>{` email: ${user.email}`}</p>
        <img src={user.img} alt="img-user"/>
        <button
            onClick={toProfileEdit}
        >
            Edit Profile
        </button>
    </div>
  )
}

export default Profile;