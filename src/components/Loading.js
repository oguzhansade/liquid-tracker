import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {

    return (
        <div style={{
            display: "flex",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'rgba(255,255,255,0.7)',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
        }}>
            <Spinner animation="border" role="status"/>
        </div>
    );
};

export default Loading;