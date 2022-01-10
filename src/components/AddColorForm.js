import React, { useCallback, useMemo, useRef, useState } from "react";
import "../App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ColorPicker, createColor } from 'material-ui-color';
import { useInput } from "../customHooks/input-hook";
import { useColor } from "../customHooks/colors-hook";
import Title from "./Title";
import SwitchComponent from "./SwitchComponent";
import Opinion from "./Opinion";

function AddColorForm() {
    console.log('Rendering AddColorForm');
    const txtTitle = useRef();
    const [color, setColor] = useState(createColor("#000"));
    const [rating, resetRating] = useInput(0);
    const { addColor } = useColor();
    const [checked, setChecked] = useState(false);

    const submit = e => {
        e.preventDefault();
        const title = txtTitle.current.value;
        addColor(title, color.hex, rating.value);
        txtTitle.current.value = "";
        resetRating();
        setColor(createColor("#000"));
    }

    var opinion = "";
    if (rating.value > 0) {
        if (rating.value < 3) {
            opinion = "This is a bad color";
        } else {
            opinion = "This is a great color";
        }
    }

    //functions are objects in js and hence just like objects, on each render the function will be diff, using the useCallback we can cache the function, similar behaviour to the useMemo
    const handleChange = useCallback(() => {
        setChecked(!checked)
    }, [checked])

    return (
        <>
            <Title>List of Colors</Title>
            <form className="m-8" style={{ display: "flex" }} onSubmit={submit}>
                <TextField style={{ margin: 8 }} disabled={checked} inputProps={{ maxLength: "20" }} defaultValue="Test" inputRef={txtTitle} type="text" placeholder="Title" variant="standard" label="Color title" required ></TextField>
                <TextField style={{ margin: 8 }} disabled={checked} inputProps={{ max: 5, min: 0 }} type="number" placeholder="Rating" variant="standard" label="Rating" required {...rating}></TextField>
                <div style={{ margin: "inherit", marginTop: "auto" }}>
                    <ColorPicker required value={color} onChange={(event) => {
                        // console.log('event: ', event);
                        setColor(event)
                    }}></ColorPicker>
                </div>
                <Button style={{ margin: 8 }} variant="contained" disabled={checked} type="submit">ADD</Button>
                <SwitchComponent checked={checked} handleChange={handleChange}></SwitchComponent>
                <Opinion>{opinion}</Opinion>
            </form>
        </>
    )
}

export default React.memo(AddColorForm)