import './App.css';
import React, { useState } from 'react';
import data from './data/colors.json';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import { v4 } from "uuid";

function App() {

    const [allColors, setAllColors] = useState(data);

    const addNewColor = (title, color, rating) => {
        console.log('rating: ', rating);
        console.log('color: ', color);
        console.log('title: ', title);
        const newColors = [
            ...allColors,
            {
                title,
                color: `#${color}`,
                rating,
                id: v4()
            }
        ]
        setAllColors(newColors);
        console.log('newColors: ', newColors);
    }

    return (
        <div style={{ paddingLeft: 16 }}>
            <h1>Color List</h1>
            <AddColorForm onNewColor={addNewColor}></AddColorForm>
            <div>
                <ColorList
                    colors={allColors}
                    onRemoveColor={
                        id => {
                            console.log(id)
                            const updatedColors = allColors.filter(color => color.id !== id);
                            setAllColors(updatedColors);
                        }
                    }
                    onRateColor={
                        (id, rating) => {
                            const newColors = allColors.map(color =>
                                color.id === id ? { ...color, rating } : color
                            );
                            setAllColors(newColors);
                        }
                    } />
            </div>
        </div >
    );
}

export default App;
