import React from "react";

function EyesOnMe() {

    function focusHandler() {
        console.log("Good!");
    }

    function blurHandler() {
        console.log("Hey! Eyes on me!")
    }

    return (
        <div>
            <button onFocus={focusHandler} onBlur={blurHandler}>Eyes on me</button>
        </div>
    );
}

export default EyesOnMe;