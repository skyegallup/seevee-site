import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { deleteAuthCookie } from '../utils/auth';


function Logout() {
    const history = useHistory();
    useEffect(() => {
        deleteAuthCookie();
        history.push('/');
    });

    return null;
}

export default Logout;
