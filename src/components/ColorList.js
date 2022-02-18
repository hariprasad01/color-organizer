import React, { useEffect, useLayoutEffect } from 'react';
import Color from './Color';
import NoColor from './NoColor';
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
        return (
            <>
                <NoColor></NoColor>
            </>
        )
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