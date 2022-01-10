import React from "react";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function SwitchComponent({ checked, handleChange = () => { } }) {
    console.log('SwitchComponent');
    return (
        <FormControlLabel style={{ marginLeft: 250 }} control={
            <Switch checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }} />}
            label="Disable input" />
    )
}

export default React.memo(SwitchComponent);