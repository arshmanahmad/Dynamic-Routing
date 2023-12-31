import React from 'react'
import { useLocation } from 'react-router-dom'

const UserShow = () => {
    const location = useLocation();
    const locationId = location.pathname.split('/').pop();
    // console.log(location)
    // console.log(locationId)
    return (
        <div>
            <h1>Dynamic Routing Demo</h1>
            <h2>Selected user info</h2>
            <h3>name: {locationId}</h3>
        </div>
    )
}

export default UserShow