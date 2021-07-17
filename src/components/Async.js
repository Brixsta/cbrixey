import React from 'react';

const Async = () => {
    return (
        <div className={"asyncCanvas"}>
            <h1 className={"asyncTitle"}>Async Javascript</h1>
            <div className={"asyncDescription"}>
            <p>
                When programming in Javascript there is a tendency to think in terms
                of synchronous code. Code blocks run one at a time. If you call a function with
                a long running action your program can't progress until that function
                value is returned.
                <br></br>
                <br></br>
                With asynchronous Javascript multiple things can happen at the sametime. You can
                call a function that doesn't return a value right-away. Once it completes, which
                might be right away or some time in the future, the program now has access to the result.
                A common example of asynchronous Javascript are callback functions. A callback function is
                a function that is called within another function. For instance, fs.writeFile takes an error first callback.
            </p>
            </div>
        </div>
    )
}

export default Async;