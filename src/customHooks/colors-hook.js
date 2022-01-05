import React, { createContext, useContext, useState } from "react";
import colorData from '../data/colors.json';
import { v4 } from "uuid";
import { color } from "@mui/system";

const ColorContext = createContext();

export function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData);

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