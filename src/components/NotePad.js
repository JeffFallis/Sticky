import React, { useState, useEffect } from 'react';
import Sticky from './Sticky';
import dataJson from '../data.json';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const NotePad = () => {

    const [data, setData] = useState({
        title: "",
        content: ""
    });
    const [show, setShow] = useState(false);
    const [stickies, setStickies] = useState(dataJson);

    // Clears data when the modal is closed or opened
    useEffect(() => {
        setData({
            title: "",
            content: ""
        });
    }, [show]);

    // Adds new note
    function addSticky(event) {
        setStickies(prevSticky => {
            return [...prevSticky, data]
        })
        handleClose();
        event.preventDefault();
    }

    // Deletes note
    function deleteSticky(id) {
        console.log(stickies);
        setStickies(prevStickies => {
            return prevStickies.filter((sticky, index) => {
                return index !== id;
            });
        });
    }

    // Handle change
    function handleChange(event) {
        const {name, value} = event.target;
        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            };
        });
    }

    // Close modal
    function handleClose() {
        setShow(false);
    }

    // Open modal
    function handleOpen() {
        setShow(true);   
    }

    return (
        <div className="App">

            <div id="Notepad-menu">
                <Button variant="light" onClick={handleOpen}>Add sticky</Button>
            </div>

            <div id="Notepad-body">
                {/* Display all stickies */}
                {stickies.map((sticky, index) => (
                        <Sticky 
                            key={index} 
                            id={index} 
                            title={sticky.title} 
                            content={sticky.content}
                            deleteSticky={deleteSticky}
                        />
                ))}
            </div>

            <Modal show={show} onHide={handleClose} animation={true} >
                <Modal.Header closeButton>
                    <Modal.Title>Add new sticky</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="title">Title: </label>
                            </div>
                            <div className="col">
                                <input type="text" id="title" name="title" onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <label htmlFor="content">Body: </label>
                            </div>
                            <div className="col">
                                <input type="text" id="content" name="content" onChange={handleChange}></input>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={addSticky}>Save</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
};

export default NotePad;