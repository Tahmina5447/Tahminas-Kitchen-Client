import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    return (
        <div>
            <ToastContainer style={{position:"center"}} />
        </div>
    );
};

export default Toast;