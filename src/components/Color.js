import React from "react";
import StarRating from "./StarsRating";
import { FaTrash } from "react-icons/fa";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import { useColor } from "../customHooks/colors-hook";

function Color({ id, title, color, rating }) {
    console.log('color: ', color);
    const { rateColor, removeColor } = useColor();
    return (
        <Card style={{ margin: 16, backgroundColor: "#FAF9F9", minWidth: 300, display: "flex" }}>
            <CardContent style={{ width: "100%" }}>
                <h2>{title}</h2>
                <StarRating
                    selectedStars={rating}
                    onRate={rate => {
                        rateColor(id, rate)
                    }}>
                </StarRating>
                <div style={{
                    height: 65,
                    width: 275,
                    backgroundColor: color,
                    borderRadius: 25,
                    display: "inline-block"
                }}></div>
                <div style={{ textAlign: "right" }}>
                    <Button variant="contained" style={{ marginTop: 12 }} onClick={() => removeColor(id)}>
                        <FaTrash />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default React.memo(Color);