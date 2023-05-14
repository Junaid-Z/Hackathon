import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { userSignOut } from '../Firebase/FirebaseFunctions';
import '../Style/Logout.css'

const LogOut = (navigate) => {
    return (
        <div className='logoutButton' >
            <LogoutIcon
                className='logoutIcon'
                onClick={() => {
                    userSignOut()
                    navigate('/')
                }}
            />
        </div>
    )
}

export default LogOut