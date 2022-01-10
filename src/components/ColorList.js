import React, { useEffect, useLayoutEffect } from 'react';
import Color from './Color';
import { useColor } from '../customHooks/colors-hook';

function ColorList() {
    const { colors } = useColor();

    useEffect(() => {
        console.log("This will happen after the useLayoutEffect");
        localStorage.setItem("colors", JSON.stringify(colors))
    })

    useLayoutEffect(() => {
        console.log("This is from useLayoutEffect");
    })

    if (!colors.length) {
        return <div>No Colors added</div>
    }
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {colors.map(color =>
                <Color
                    key={color.id}
                    {...color}
                />
            )}
        </div>
    );
}

export default React.memo(ColorList)