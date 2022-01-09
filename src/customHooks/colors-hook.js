import React, { createContext, useContext, useState } from "react";
import colorData from '../data/colors.json';
import { v4 } from "uuid";

const ColorContext = createContext();

export function ColorProvider({ children }) {

    var data = '';

    if (JSON.parse(localStorage.getItem("colors")) !== undefined && JSON.parse(localStorage.getItem("colors")) !== null) {
        data = JSON.parse(localStorage.getItem("colors"));
    } else {
        data = colorData;
    }

    console.log('data: ', data);

    const [colors, setColors] = useState(data);

    const addColor = (title, color, rating) => {
        setColors(
            [
                ...colors,
                {
                    id: v4(),
                    color: `#${color}`,
                    title,
                    rating
                }
            ]
        )
    }

    const removeColor = (id) => {
        setColors(colors.filter(color => color.id !== id))
    }

    const rateColor = (id, rating) => {
        setColors(colors.map(color => color.id === id ? { ...color, rating } : color))
    }

    return (
        <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColor = () => useContext(ColorContext);