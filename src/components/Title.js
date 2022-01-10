import React from "react";

function Title({ children }) {
    console.log('children: ', children);
    return (
        <h1>{children}</h1>
    )
}

export default React.memo(Title)
// Why React.memo? if the state and props of the component remains the same then the component wont be rerendered 
//React.memo only checks for prop changes. 
//If your function component wrapped in React.memo has a useState, useReducer or useContext Hook in its implementation, 
//it will still rerender when state or context change.
