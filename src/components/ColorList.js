import React from 'react';
import Color from './Color';

export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {
    if (!colors.length) {
        return <div>No Colors added</div>
    }
    return (
        <div style={{ display: "flex" }}>
            {colors.map(color =>
                <Color
                    key={color.id}
                    onRemove={onRemoveColor}
                    onRate={(id, rate) => {
                        onRateColor(id, rate)
                    }}
                    {...color}
                />
            )}
        </div>
    );
}