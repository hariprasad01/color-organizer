import React, { useRef, useState } from "react";
import "../App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ColorPicker, createColor } from 'material-ui-color';
import { useInput } from "../customHooks/useInput";

export default function AddColorForm({ onNewColor = f => f }) {
    const txtTitle = useRef();
    const [color, setColor] = useState(createColor("#000"));
    // const [rating, setRating] = useState(0);
    const [rating, resetRating] = useInput(0);

    const submit = e => {
        e.preventDefault();
        const title = txtTitle.current.value;
        // const temp = txtTitle;
        // console.log('txtTitle.current: ', temp);
        // console.log('title: ', title);
        console.log("color sds: ", color);
        onNewColor(title, color.hex, rating.value);
        txtTitle.current.value = "";
        // setRating(0);
        resetRating();
        setColor(createColor("#000"));
    }

    return (
        <form className="m-8" style={{ display: "flex" }} onSubmit={submit}>
            <TextField style={{ margin: 8 }} inputProps={{ maxLength: "20" }} inputRef={txtTitle} type="text" placeholder="Title" variant="standard" label="Color title" required ></TextField>
            <TextField style={{ margin: 8 }} inputProps={{ max: 5, min: 0 }} type="number" placeholder="Rating" variant="standard" label="Rating" required {...rating}></TextField>
            <div style={{ margin: "inherit", marginTop: "auto" }}>
                <ColorPicker required value={color} onChange={(event) => {
                    console.log('event: ', event);
                    setColor(event)
                }}></ColorPicker>
            </div>
            <Button style={{ margin: 8 }} variant="contained" type="submit">ADD</Button>
        </form>
    )
}