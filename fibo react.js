import React, { useState } from 'react';

function ResponseDisplay() {
    const [responseData] = useState({
        "numbers": [
            13,
            21,
            34,
            55,
            89,
            144,
            233,
            377,
            610,
            987,
            1597,
            2584,
            4181,
            6765,
            10946,
            17711,
            28657,
            46368,
            75025
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
