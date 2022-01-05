import React, { useContext } from 'react';
import Color from './Color';
import { useColor } from '../customHooks/colors-hook';

export default function ColorList() {
    const { colors } = useColor();
    if (!colors.length) {
        return <div>No Colors added</div>
    }
    return (
        <div style={{ display: "flex" }}>
            {colors.map(color =>
                <Color
                    key={color.id}
                    {...color}
                />
            )}
        </div>
    );
}