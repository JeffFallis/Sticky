import React from "react";

const StickyFooter = props => {

    function handleDelete() {
        console.log(props.index);
        props.deleteSticky(props.index);
    }

    return(
        <div id="StickyFooter" onClick={handleDelete}>
            Delete
        </div>
    );
}

export default StickyFooter;