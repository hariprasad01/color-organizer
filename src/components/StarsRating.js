import React from "react";
import { FaStar } from "react-icons/fa"

const Star = ({ selected = false, onSelect = f => f }) => <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />

const createArray = length => [...Array(length)]

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f, style = {}, ...props }) {
    return (
        <div style={{ ...style }} {...props}>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => {
                        onRate(i + 1)
                    }}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}