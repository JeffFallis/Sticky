import React from 'react';
import StickyHeader from './StickyHeader';
import StickyBody from './StickyBody';
import StickyFooter from './StickyFooter';

const Sticky = props => {

    return (
        <div className="sticky">
            <StickyHeader title={props.title}/>
            <StickyBody content={props.content}/>
            <StickyFooter index={props.id} deleteSticky={props.deleteSticky}/>
        </div>
    );
};

export default Sticky;