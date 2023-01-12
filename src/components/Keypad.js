import React from "react";

function Keypad (){

    function keypadHandler() {
        console.log('Entering password...');
    }

    return (
        <div>
            <input onChange={keypadHandler} type="password" name="keypad" id="keypad" />
        </div>
    );
}

export default Keypad;