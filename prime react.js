import React, { useState } from 'react';

function ResponseDisplay() {
    const [responseData] = useState({
        "numbers": [
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67
          ]
    });

    return (
        <div className="container">
            <h1>Response from Server for prime</h1>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
    );
}

export default ResponseDisplay;
