import React from "react";

export default function NoColor() {
    const altText = "Nothing here, add some colors"
    return (
        <div style={{ alignContent: "center" }}>
            <img src={require("file:/C:/Users/haprasad/Documents/React/create-react-app/color-organizer/src/data/empty.png")} alt={altText} height="50%" width="50%"></img>
        </div>
    )
}