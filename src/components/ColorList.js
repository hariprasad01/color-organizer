import React, { useEffect } from 'react';
import Color from './Color';
import { useColor } from '../customHooks/colors-hook';

export default function ColorList() {
    const { colors } = useColor();

    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colors))
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