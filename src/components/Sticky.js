import React from 'react';
import StickyHeader from './StickyHeader';
import StickyBody from './StickyBody';

const Sticky = props => {

    return (
        <div className="sticky">
            <StickyHeader title={props.title}/>
            <StickyBody content={props.content}/>
        </div>
    );
};

export default Sticky;