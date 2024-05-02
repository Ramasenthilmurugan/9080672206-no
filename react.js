import React, { useState } from 'react';

function ResponseDisplay() {
    const [responseData] = useState({
        "numbers": [
            10,
            12,
            14,
            16,
            18,
            20,
            22,
            24,
            26,
            28,
            30,
            32,
            34,
            36,
            38,
            40,
            42,
            44
        ]
    });

    return (
        <div className="container">
            <h1>Response from Server for even</h1>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
    );
}

export default ResponseDisplay;
