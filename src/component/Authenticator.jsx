import Cookies from 'js-cookie';
import React from 'react';
import {Outlet} from 'react-router-dom'

function Authenticator() {
    if(Cookies.get('jwt')){
        return (
            <Outlet />
        )
    }
    else {
        window.location.href = '/login';
    }
}

export default Authenticator;