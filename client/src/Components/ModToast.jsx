import * as React from 'react';
import Alert from '@mui/material/Alert';
import Center from '../animated-components/Center';

export default function ModToast({ text, severity }) {
    return (
        <div
        style={{
            top: '30px',
            left: '50%',
            transform: 'translateX(-50%)'
            
        }} 
        className='fixed z-[10000]'>
            <Center>
                <Alert variant="filled" severity={severity}>
                    {text}
                </Alert>
            </Center>
        </div>
    );
}
