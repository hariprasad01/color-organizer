import React, { useMemo } from 'react';

function Opinion({ children }) {
    console.log("Redering the opinion");
    //useMemo will cache the respose and if the data in the dependency array is the same then the cached value will be returned
    //This should be rerendered only when the value of children changes
    const text = useMemo(() => children.split(" "), [children]);
    return (
        <h4>{text.join("-")}</h4>
    )
}

export default React.memo(Opinion)