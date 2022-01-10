import React, { useMemo, useRef, useState } from "react";
import "../App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ColorPicker, createColor } from 'material-ui-color';
import { useInput } from "../customHooks/input-hook";
import { useColor } from "../customHooks/colors-hook";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Title from "./Title";


function AddColorForm() {
    console.log('Rendering AddColorForm');
    const txtTitle = useRef();
    const [color, setColor] = useState(createColor("#000"));
    const [rating, resetRating] = useInput(0);
    const { addColor } = useColor();
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked)
    }

    const submit = e => {
        e.preventDefault();
        const title = txtTitle.current.value;
        addColor(title, color.hex, rating.value);
        txtTitle.current.value = "";
        resetRating();
        setColor(createColor("#000"));
    }

    //useMemo will cache the respose and if the data in the dependency array is the same then the cached value will be returned
    const compliment = useMemo(() => {
        if (rating.value > 0) {
            let x = 1
            while (x < 4000000000) {
                x++
            }
            if (rating.value < 3) {
                return <h3>This is a bad color</h3>
            } else {
                return <h3>This is a great color</h3>
            }
        }
        return undefined;
    }, [rating.value])


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
                <FormControlLabel style={{ marginLeft: 250 }} control={
                    <Switch checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }} />}
                    label="Disable input" />
                {compliment}
            </form>
        </>
    )
}

export default React.memo(AddColorForm)