import React, { useState } from 'react';
import Sticky from './Sticky';
import dataJson from '../data.json';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const NotePad = () => {

    const [stickies, setStickies] = useState(dataJson);

    // Adds new note
    function addSticky() {
        setStickies(stickies => [...stickies, {key: stickies.length + 1, title: "TEST", content: "HELLO THERE"}])
    }

    return (
        <div className="App">

            <div id="Notepad-menu">
                <Button className="btn btn-light" onClick={addSticky}>Add sticky </Button>
            </div>

            <div id="Notepad-body">
                {/* Display all stickies */}
                {stickies.map(sticky => (
                    <Sticky key={sticky.key} title={sticky.title} content={sticky.content} />
                ))}
            </div>

        </div>
    )
};

export default NotePad;