import React from "react";
import emptyImage from '../data/empty.png';

export default function NoColor() {
    const altText = "Nothing here, add some colors"
    return (
        <div style={{ alignContent: "center" }}>
            <img src={emptyImage} alt={altText} height="50%" width="50%"></img>
        </div>
    )
}