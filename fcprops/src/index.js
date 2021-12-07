import React from 'react';
import reactDom from 'react-dom';
import Search from './Search';

const displaySearch = (event)=>{
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.name);
}

reactDom.render(
    <Search displaySearch={displaySearch}/>,
    document.getElementById("root")
);