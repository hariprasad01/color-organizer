import React, { useMemo } from 'react';

function Opinion({ children }) {
    console.log("Redering the opinion");
    //useMemo will cache the respose and if the data in the dependency array is the same then the cached value will be returned
    //This should be rerendered only when the value of children changes
    const text = useMemo(() => children.split(" "), [children]);
    return (
        <h3>{text.join("-")}</h3>
    )
}

export default React.memo(Opinion)