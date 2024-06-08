import React from 'react';
import MyResume from './Connor McDonald_Resume.pdf'

export default function Resume() {
    return(
        <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
            <embed src={MyResume} type='application/pdf'width='100%' height="100%" style={{ objectFit: 'contain' }}/>
        </div>
    )
}